import { checkFileNameForString } from './checkForString';
import { emptyFileNameError } from './errorMessages'

/**
 * Validate if fileName is empty.
 *
 * @param {string} fileName
 */
export function checkForFileName (fileName) {
  if (!fileName) {
    throw new Error(emptyFileNameError);
  }
  checkFileNameForString(fileName);
}
