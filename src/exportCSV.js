import { checkForFileName } from './checkForFileName';
import { checkDataForString } from './checkForString';
import { checkDataForArray } from './checkDataForArray';
import { convertArrayToCSVString } from './convertArrayToCSVString';
import { downloadFileFromObjectUrl } from './downloadFileFromObjectURL';

/**
 * Download CSV file from string.
 *
 * @param {string} data
 * @param {string} fileName
 */
export function downloadCSV (data, fileName) {
  try {
    checkDataForString(data);
    checkForFileName(fileName);
    const dataBlob = new Blob([data], { type: 'text/csv' });

    downloadFileFromObjectUrl(dataBlob, fileName);
  } catch (error) {
    throw error;
  }
}

/**
 * Download CSV file from string.
 *
 * @param {string} data
 * @param {string} fileName
 */
export function downloadCSVFromArray (data, fileName) {
  try {
    checkDataForArray(data);
    checkForFileName(fileName);

    const csvString = convertArrayToCSVString(data);

    downloadCSV(csvString, fileName);
  } catch (error) {
    throw error;
  }
}

/**
 * Download CSV file from base64 encoded string.
 *
 * @param {string} data
 * @param {string} fileName
 */
export function downloadCSVFromBase64 (data, fileName) {
  try {
    checkDataForString(data);
    checkForFileName(fileName);
    const decodedData = atob(data);

    downloadCSV(decodedData, fileName);
  } catch (error) {
    throw error;
  }
}
