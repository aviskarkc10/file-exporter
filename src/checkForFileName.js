export function checkForFileName(fileName) {
  if(!fileName) {
    throw new Error('Filename is required.');
  }
}
