/* eslint-disable react/prop-types */
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

// The changes brought here are to show an audio player when the attachment is an audio file
export default class Attachment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			downloader: null,
			progress: 0,
			duration: null,
			preview: null,
			src: "",
			preparingAudio: false,
		};

		this.audioContext = new AudioContext();
		this.downloadFile = this.downloadFile.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.getRecording = this.getRecording.bind(this);
		this.getDuration = this.getDuration.bind(this);
		this.createPreview = this.createPreview.bind(this);
	}

	componentDidMount() {
		if (this.props.att?.mime.includes("audio")) {
			this.setState({ preparingAudio: true });
			if (!this.state.url || !this.state.preview) {
				this.getRecording()
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

	getDuration(url) {
		return new Promise((resolve) => {
			const audio = new Audio(url);
			audio.onloadedmetadata = () => resolve(audio.duration);
		});
	}

	// Obtain data in a form sutable for sending or playing back.
	// If duration is valid, apply fix for Chrome's WebM duration bug.
	// Creates the preview and blob url
	getRecording() {
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

	// creates a preview fron an audio
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
				{/* ُ Show a new audio player with new duration */}
				{isAudio && (
					<div>
						{this.state.duration === null && this.state.preparingAudio && (
							<AudioPlayer
								duration={null}
								src={this.state.src}
								preview={this.state.preview}
								audioLoading={this.state.preparingAudio}
							/>
						)}
						{this.state.duration !== null && !this.state.preparingAudio && (
							<AudioPlayer
								duration={this.state.duration}
								src={this.state.src}
								preview={this.state.preview}
								audioLoading={this.state.preparingAudio}
							/>
						)}
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
