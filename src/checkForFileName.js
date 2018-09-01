import { checkFileNameForString } from "./checkForString";

export function checkForFileName(fileName) {
  checkFileNameForString(fileName);
  if(!fileName) {
    throw new Error('Filename is required.');
  }
}
