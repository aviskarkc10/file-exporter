import { checkForFileName } from './checkForFileName';
import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';
import { checkDataForString } from './checkForString';

export function downloadPDFFromBase64(data, fileName) {
  checkDataForString(data);
  checkForFileName(fileName);
  const decodedData = atob(data);
  const len = decodedData.length;
  let bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = decodedData.charCodeAt(i);
  }

  const dataBlob = new Blob([bytes.buffer], { type: 'application/pdf' });
  
  downloadFileFromObjectUrl(dataBlob, fileName);
}
