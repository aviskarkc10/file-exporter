import { checkForFileName } from './checkForFileName';
import { checkDataForString } from './checkForString';
import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';

export function downloadCSV(data, fileName) {
  checkDataForString(data);
  checkForFileName(fileName);
  const dataBlob = new Blob([data], { type: 'text/csv' });

  downloadFileFromObjectUrl(dataBlob, fileName);
}

export function downloadCSVFromBase64(data, fileName) {
  checkDataForString(data);
  checkForFileName(fileName);  
  const decodedData = atob(data);

  downloadCSV(decodedData, fileName);
}
