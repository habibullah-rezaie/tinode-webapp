/* eslint-disable react/prop-types */
/*
 * CHANGES THAT I'VE BROUGHT
 * 1. add a new prop to Attachment: att
 * this props contains metadata about the attachments
 *
 * 2. Check if mimetype of the file is and audio it renders
 * an audio player and prepares a preview
 */

import React from "react";
import { FormattedMessage } from "react-intl";

import FileProgress from "./file-progress.jsx";
import { bytesToHumanSize } from "../lib/strformat.js";
import { isUrlRelative, sanitizeUrl } from "../lib/utils.js";
import { base64ToBlob, intArrayToBase64 } from "../lib/blob-helpers.js";
import fixWebmDuration from "fix-webm-duration";
import AudioPlayer from "./audio-player.jsx";

// Number of bars in preview.
const VISUALIZATION_BARS = 96;
// Maximum number of samples per bar.
const MAX_SAMPLES_PER_BAR = 10;

export default class Attachment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			downloader: null,
			progress: 0,

			// This the duration of the audio
			duration: null,

			// This the preview. those bars
			preview: null,

			// This the src or the url, the src of a playable audio
			src: "",

			// This prop shows if the url and preview are ready
			preparingAudio: false,
		};

		this.audioContext = new AudioContext();
		this.downloadFile = this.downloadFile.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.getRecording = this.getAudio.bind(this);
		this.getDuration = this.getDuration.bind(this);
		this.createPreview = this.createPreview.bind(this);
	}

	componentDidMount() {
		/* Here check if the attachment file is and audio file
		 *  if yes, then prepare the url and preview
		 */
		if (this.props.att?.mime.includes("audio")) {
			this.setState({ preparingAudio: true });
			if (!this.state.url || !this.state.preview) {
				this.getAudio()
					.then(({ url, preview }) => {
						this.getDuration(url).then((duration) => {
							duration = duration * 1000;
							console.log("DURATION", duration);
							this.setState({ duration, preparingAudio: false });
						});
						this.setState({ src: url, preview });
					})
					.catch(() => this.setState({ preparingAudio: false }));
			}
		}
	}

	// Gets the duration of the audio
	getDuration(url) {
		return new Promise((resolve) => {
			const audio = new Audio(url);
			audio.onloadedmetadata = () => resolve(audio.duration);
		});
	}

	/**
	 *
	 * @returns A promise containing the preview and url
	 */
	getAudio() {
		const att = this.props.att;
		let blob = base64ToBlob(att.val, att.mime);
		return (
			this.state.duration > 0
				? fixWebmDuration(blob, this.state.duration, { logger: false })
				: Promise.resolve(blob)
		)
			.then((fixedBlob) => {
				blob = fixedBlob;
				return fixedBlob.arrayBuffer();
			})
			.then((arrayBuff) => {
				const buf = this.audioContext.decodeAudioData(arrayBuff);
				console.log("BUF", buf);
				return buf;
			})
			.then((decoded) => this.createPreview(decoded))
			.then((preview) => ({
				url: window.URL.createObjectURL(blob),
				preview: intArrayToBase64(preview),
			}));
	}

	// Creates a preview (for showing bars)
	createPreview(audio) {
		const data = audio.getChannelData(0);
		// Number of amplitude bars in preview.
		const viewLength = Math.min(data.length, VISUALIZATION_BARS);
		// The number of samples in each bar.
		const totalSPB = (data.length / viewLength) | 0;
		// Distance between samples: we are going to take just a fracton of samples.
		const samplingRate = Math.max(1, (totalSPB / MAX_SAMPLES_PER_BAR) | 0);

		let buffer = [];
		let max = -1;
		for (let i = 0; i < viewLength; i++) {
			let amplitude = 0;
			let count = 0;
			for (let j = 0; j < totalSPB; j += samplingRate) {
				amplitude += data[totalSPB * i + j] ** 2;
				count++;
			}
			const val = Math.sqrt(amplitude / count);
			buffer.push(val);
			max = Math.max(max, val);
		}
		// Normalize amplitude to 0..100.
		if (max > 0) {
			buffer = buffer.map((a) => ((100 * a) / max) | 0);
		}
		return buffer;
	}

	downloadFile(url, filename, mimetype) {
		if (!url) {
			this.props.onError("Invalid download URL '" + url + "'");
			return;
		}

		const downloader = this.props.tinode.getLargeFileHelper();
		this.setState({ downloader: downloader });
		downloader
			.download(
				url,
				filename,
				mimetype,
				(loaded) => {
					this.setState({ progress: loaded / this.props.size });
				},
				(err) => {
					this.props.onError(err, "err");
				}
			)
			.then(() => {
				this.setState({ downloader: null, progress: 0 });
			})
			.catch((err) => {
				if (err) {
					this.props.onError("Error downloading file: " + err.message, "err");
				}
				this.setState({ downloader: null, progress: 0 });
			});
	}

	handleCancel() {
		if (this.props.uploading) {
			this.props.onCancelUpload();
		} else if (this.state.downloader) {
			this.state.downloader.cancel();
		}
	}

	render() {
		let filename = this.props.filename || "file_attachment";
		if (filename.length > 36) {
			filename = filename.substr(0, 16) + "..." + filename.substr(-16);
		}
		let size =
			this.props.size > 0 ? (
				<span className="small gray">
					({bytesToHumanSize(this.props.size)})
				</span>
			) : null;

		// Detect if the download URL is relative or absolute.
		// If the URL is relative use LargeFileHelper to attach authentication
		// credentials to the request.
		let url, helperFunc;
		if (
			!this.props.uploading &&
			!this.state.downloader &&
			isUrlRelative(this.props.downloadUrl)
		) {
			// Relative URL. Use download helper.
			url = "#";
			helperFunc = (e) => {
				e.preventDefault();
				this.downloadFile(
					this.props.downloadUrl,
					this.props.filename,
					this.props.mimetype
				);
			};
		} else {
			url = sanitizeUrl(this.props.downloadUrl);
			helperFunc = null;
		}

		// Here abstract the download widget out for code readablity
		const downloadWidget = (
			<>
				<i className="material-icons">file_download</i>{" "}
				<FormattedMessage
					id="save_attachment"
					defaultMessage="save"
					description="Call to save an attachment"
				/>
			</>
		);

		// Abstract the download link to be used in several places
		const downloadLink = url ? (
			<a href={url} download={this.props.filename} onClick={helperFunc}>
				{downloadWidget}
			</a>
		) : (
			<span className="light-gray">{downloadWidget}</span>
		);

		const isAudio = this.props.att.mime.includes("audio");
		return (
			<div className="attachment">
				{/* When the attachment is an audio show audio player */}
				{isAudio && (
					<div>
						{/* Until audio preparation is done show a dummy audio player with a loader */}
						{this.state.duration === null && this.state.preparingAudio && (
							<AudioPlayer
								duration={null}
								src={this.state.src}
								preview={this.state.preview}
								// I added this props to AudioPlayer for showing a spinner instead of play button
								// this props is passed to it
								audioLoading={this.state.preparingAudio}
							/>
						)}
						{/* Here render AudioPlayer again to show the new duration when the audio is prepared*/}
						{this.state.duration !== null && !this.state.preparingAudio && (
							<AudioPlayer
								duration={this.state.duration}
								src={this.state.src}
								preview={this.state.preview}
								audioLoading={this.state.preparingAudio}
							/>
						)}

						{/* While showing audio player also show a downloader
							 because originally the file was an attachment not a voice
							 record 
		 				*/}
						{downloadLink}
					</div>
				)}
				{!isAudio && (
					<>
						<div>
							<i className="material-icons big gray">insert_drive_file</i>
						</div>
						<div className="flex-column">
							<div>
								{filename} {size}
							</div>
							{this.props.uploading || this.state.downloader ? (
								<FileProgress
									progress={
										this.props.uploading
											? this.props.progress
											: this.state.progress
									}
									onCancel={this.handleCancel}
								/>
							) : (
								<div>{downloadLink}</div>
							)}
						</div>
					</>
				)}
			</div>
		);
	}
}
