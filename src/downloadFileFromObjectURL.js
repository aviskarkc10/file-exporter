import { checkForFileName } from './checkForFileName';

export function downloadFileFromObjectUrl(dataBlob, fileName) {
  checkForFileName(fileName);  
  const objectURL = window.URL.createObjectURL(dataBlob);

  let link = document.createElement('a');

  link.setAttribute('href', objectURL);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);

  link.click();
}