import React from "react";

import Attachment from "./attachment.jsx";

import { Drafty } from "tinode-sdk";

function AttachmentWithAudioPlayer({
	att,
	tinode,
	onError,
	onCancelUpload,
	progress,
}) {
	return (
		<div>
			<Attachment
				tinode={tinode}
				downloadUrl={Drafty.getDownloadUrl(att)}
				filename={att.name}
				uploading={Drafty.isProcessing(att)}
				mimetype={att.mime}
				size={Drafty.getEntitySize(att)}
				progress={progress}
				onCancelUpload={onCancelUpload}
				onError={onError}
				att={att}
			/>
		</div>
	);
}

export default AttachmentWithAudioPlayer;
