import { checkForFileName } from './checkForFileName';
import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';

export function downloadCSV(data, fileName) {
  checkForFileName(fileName);
  const dataBlob = new Blob([data], { type: 'text/csv' });

  downloadFileFromObjectUrl(dataBlob, fileName);
}

export function downloadCSVFromBase64(data, fileName) {
  checkForFileName(fileName);  
  const decodedData = atob(data);

  downloadCSV(decodedData, fileName);
}
