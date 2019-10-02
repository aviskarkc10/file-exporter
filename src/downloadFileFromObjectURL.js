import { checkForFileName } from './checkForFileName';
import { checkForWindow } from './checkForWindow';

/**
 * Download file from object url.
 *
 * @param {string} dataBlob
 * @param {string} fileName
 */
export function downloadFileFromObjectUrl (dataBlob, fileName) {
  try {
    checkForFileName(fileName);
    checkForWindow();
    const objectURL = window.URL.createObjectURL(dataBlob);
    let link = document.createElement('a');

    link.setAttribute('href', objectURL);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);

    link.click();

    link.remove();
    window.URL.revokeObjectUrl(objectURL);
  } catch (error) {
    throw error;
  }
}
