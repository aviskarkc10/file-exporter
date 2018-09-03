import { checkFileNameForString } from "./checkForString";

export function checkForFileName(fileName) {
  if(!fileName) {
    throw new Error('Filename is required.');
  }
  checkFileNameForString(fileName);
}
