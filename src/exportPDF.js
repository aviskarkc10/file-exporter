import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';

export function downloadPDFFromBase64(data, fileName) {
  const decodedData = atob(data);
  const len = decodedData.length;
  let bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = decodedData.charCodeAt(i);
  }

  const dataBlob = new Blob([bytes.buffer], { type: 'application/pdf' });
  
  downloadFileFromObjectUrl(dataBlob, fileName);
}
