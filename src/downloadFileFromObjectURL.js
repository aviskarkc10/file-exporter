import { checkForFileName } from './checkForFileName';
import { checkForWindow } from './checkForWindow';

export function downloadFileFromObjectUrl(dataBlob, fileName) {
  try {
    checkForFileName(fileName);  
    checkForWindow();
    const objectURL = window.URL.createObjectURL(dataBlob);
  
    let link = document.createElement('a');
  
    link.setAttribute('href', objectURL);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
  
    link.click();
  }
  catch (error) {
    throw error;
  }
}
