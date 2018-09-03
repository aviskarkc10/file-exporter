import { checkForFileName } from './checkForFileName';
import { checkDataForString } from './checkForString';
import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';

export function downloadCSV(data, fileName) {
  try {
    checkDataForString(data);
    checkForFileName(fileName);
    const dataBlob = new Blob([data], { type: 'text/csv' });

    downloadFileFromObjectUrl(dataBlob, fileName);
  }
  catch (error) {
    throw error;
  }
}

export function downloadCSVFromBase64(data, fileName) {
  try {
    checkDataForString(data);
    checkForFileName(fileName);
    const decodedData = atob(data);

    downloadCSV(decodedData, fileName);
  }
  catch (error) {
    throw error;
  }
}
