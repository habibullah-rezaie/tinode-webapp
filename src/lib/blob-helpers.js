// File and image helper functions.

// Supported image MIME types and corresponding file extensions.
export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/gif', 'image/png', 'image/svg', 'image/svg+xml'];
export const MIME_EXTENSIONS         = ['jpg',        'gif',       'png',       'svg',       'svg'];

// Get an URL from a theCard photo: either create a data: URL or return reference URL.
export function makeImageUrl(photo) {
  if (photo && typeof photo == 'object') {
    if (photo.ref) {
      return photo.ref
    }
    if (photo.data && photo.type) {
      const mime = photo.type.startsWith('image/') ? photo.type : ('image/' + photo.type);
      return 'data:' + mime + ';base64,' + photo.data;
    }
  }
  return null;
}

// Calculate linear dimensions for scaling image down to fit under a certain size.
// Returns an object which contains destination sizes, source sizes, and offsets
// into source (when making square images).
export function fitImageSize(width, height, maxWidth, maxHeight, forceSquare) {
  // Sanitize input
  width = width | 0;
  height = height | 0;
  maxWidth = maxWidth | 0;
  maxHeight = maxHeight | 0;

  if (width <= 0 || height <= 0 || maxWidth <= 0 || maxHeight <= 0) {
    return null;
  }

  if (forceSquare) {
    maxWidth = maxHeight = Math.min(maxWidth, maxHeight);
  }

  const scale = Math.min(
    Math.min(width, maxWidth) / width,
    Math.min(height, maxHeight) / height
  );

  const size = {
    dstWidth: (width * scale) | 0,
    dstHeight: (height * scale) | 0,
  };

  if (forceSquare) {
    // Also calculate parameters for making the image square.
    size.dstWidth = size.dstHeight = Math.min(size.dstWidth, size.dstHeight);
    size.srcWidth = size.srcHeight = Math.min(width, height);
    size.xoffset = ((width - size.srcWidth) / 2) | 0;
    size.yoffset = ((height - size.srcWidth) / 2) | 0;
  } else {
    size.xoffset = size.yoffset = 0;
    size.srcWidth = width;
    size.srcHeight = height;
  }
  return size;
}

// Ensure file's extension matches mime content type
export function fileNameForMime(fname, mime) {
  const idx = SUPPORTED_IMAGE_FORMATS.indexOf(mime);
  if (idx < 0 || !fname) {
    // Unknown mime or empty name.
    return fname;
  }
  const ext = MIME_EXTENSIONS[idx];

  const at = fname.lastIndexOf('.');
  if (at >= 0) {
    fname = fname.substring(0, at);
  }
  return fname + '.' + ext;
}

// Scale uploaded image to fit under certain dimensions and byte size, optionally constraining to a square.
// Returns a promise which is resolven on success or rejected on failure.
export function imageScaled(fileOrBlob, maxWidth, maxHeight, maxSize, forceSquare) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onerror = function(err) {
      reject(new Error("Image format unrecognized"));
    }
    img.onload = async function() {
      // Once the image is loaded, the URL is no longer needed.
      URL.revokeObjectURL(img.src);

      // Calculate the desired image dimensions.
      const dim = fitImageSize(img.width, img.height, maxWidth, maxHeight, forceSquare);
      if (!dim) {
        reject(new Error("Invalid image"));
        return;
      }
      let canvas = document.createElement('canvas');
      canvas.width = dim.dstWidth;
      canvas.height = dim.dstHeight;
      let ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, dim.xoffset, dim.yoffset, dim.srcWidth, dim.srcHeight,
        0, 0, dim.dstWidth, dim.dstHeight);

      const mime = SUPPORTED_IMAGE_FORMATS.includes(fileOrBlob.type) ? fileOrBlob.type : 'image/jpeg';
      // Generate blob to check size of the image.
      let blob = await new Promise(resolve => canvas.toBlob(resolve, mime));
      if (!blob) {
        reject(new Error("Unsupported image format"));
        return;
      }
      // Ensure the image is not too large. Shrink the image keeping the aspect ratio.
      // Do nothing if maxsize is <= 0.
      while (maxSize > 0 && blob.length > maxSize) {
        dim.dstWidth = (dim.dstWidth * 0.70710678118) | 0;
        dim.dstHeight = (dim.dstHeight * 0.70710678118) | 0;
        canvas.width = dim.dstWidth;
        canvas.height = dim.dstHeight;
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dim.xoffset, dim.yoffset, dim.srcWidth, dim.srcHeight,
          0, 0, dim.dstWidth, dim.dstHeight);
        blob = await new Promise(resolve => canvas.toBlob(resolve, mime));
      }

      canvas = null;
      resolve({mime: mime, blob: blob, width: dim.dstWidth, height: dim.dstHeight, name: fileNameForMime(fileOrBlob.name, mime)});
    };
    img.src = URL.createObjectURL(fileOrBlob);
  });
}

// Scale and crop image according to specified dimensions.
// The coordinates are in unscaled image pixels, i.e. cut the rectangle first then scale it.
// returns a promise.
export function imageCrop(mime, objURL, left, top, width, height, scale) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onerror = (err) => {
      reject(new Error("Image format unrecognized"));
    };
    img.onload = () => {
      // Once the image is loaded, the URL is no longer needed.
      URL.revokeObjectURL(img.src);

      let canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      let ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, left, top, width, height, 0, 0, canvas.width, canvas.height);

      mime = SUPPORTED_IMAGE_FORMATS.includes(mime) ? mime : 'image/jpeg';
      // Generate blob to check size of the image.
      canvas.toBlob((blob) => {
        // Allow GC.
        canvas = null;
        if (blob) {
          resolve({mime: mime, blob: blob, width: width, height: height});
        } else {
          reject(new Error("Unsupported image format"));
        }
      }, mime);
    };
    img.src = objURL;
  });
}

// Convert file to base64 string.
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = (evt) => {
      reject(reader.error);
    };
    reader.onload = () => {
      resolve({mime: file.type, bits: reader.result.split(',')[1], name: file.name});
    };
    reader.readAsDataURL(file);
  });
}

// Convert Blob to base64 string. Returns a promise resolved with the base64 string and mime.
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = _ => {
      reject(reader.error);
    };
    reader.onload = () => {
      resolve({mime: blob.type, bits: reader.result.split(',')[1]});
    };
    reader.readAsDataURL(blob);
  });
}

// File pasted from the clipboard. It's either an inline image or a file attachment.
export function filePasted(event, onImageSuccess, onAttachmentSuccess, onError) {
  const items = (event.clipboardData || event.originalEvent.clipboardData || {}).items;
  if (!items || !items.length) {
    return false;
  }

  for (let i in items) {
    const item = items[i];
    if (item.kind === 'file') {
      const file = item.getAsFile();
      if (!file) {
        console.error("Failed to get file object from pasted file item", item.kind, item.type);
        onError("Failed to get file object from pasted file item");
        continue;
      }
      if (file.type && file.type.split('/')[0] == 'image') {
        onImageSuccess(file);
      } else {
        onAttachmentSuccess(file);
      }
      // Indicate that the pasted data contains a file.
      return true;
    }
  }
  // No file found.
  return false;
}

// Get mime type from data URL header.
export function getMimeType(header) {
  var mime = /^data:(image\/[-+a-z0-9.]+);base64/.exec(header);
  return (mime && mime.length > 1) ? mime[1] : null;
}

// Given length of a binary object in bytes, calculate the length after
// base64 encoding.
export function base64EncodedLen(n) {
  return Math.floor((n + 2) / 3) * 4;
}

// Given length of a base64-encoded object, calculate decoded size of the
// pbject in bytes.
export function base64DecodedLen(n) {
  return Math.floor(n / 4) * 3;
}

// Re-encode string to standard base64 encoding with padding.
// The string may be base64-URL encoded without the padding.
export function base64ReEncode(str) {
  if (str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    try {
      str = btoa(atob(str));
    } catch(err) {
      console.error("Failed to base64 re-encode string.", err);
      str = null;
    }
  }
  return str;
}

// Convert a base64 encoded string with the provided mime type into a Blob.
export function base64ToBlob(str, mime) {
  if (!str) {
    return null;
  }

  try {
    // Make blob.
    const bin = atob(str);
    const length = bin.length;
    const buf = new ArrayBuffer(length);
    const arr = new Uint8Array(buf);
    for (let i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }

    return new Blob([buf], { type: mime });
  } catch(err) {
    console.error("Failed to convert base64 to blob: ", err);
  }

  return null;
}

export function intArrayToBase64(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  try {
    let bin = '';
    new Uint8Array(arr).forEach(b => bin += String.fromCharCode(b));
    return window.btoa(bin);
  } catch (err) {}
  return null;
}

export function base64ToIntArray(b64) {
  const arr = [];
  try {
    const bin =  window.atob(b64);
    [...bin].forEach(c => {
      arr.push(c.charCodeAt(0));
    });
    return arr;
  } catch (err) {}
  return null;
}
