import { checkFileNameForString } from "./checkForString";
import { emptyFileNameError } from './errorMessages'

export function checkForFileName(fileName) {
  if(!fileName) {
    throw new Error(emptyFileNameError);
  }
  checkFileNameForString(fileName);
}
