import { dataTypeError, fileNameTypeError } from './errorMessages';

/**
 * Validate if data is of type string.
 *
 * @param {string} data
 */
export function checkDataForString (data) {
  if (typeof data !== 'string') {
    throw new Error(dataTypeError);
  }
}

/**
 * Validate if fileName is of type string.
 *
 * @param {string} fileName
 */
export function checkFileNameForString (fileName) {
  if (typeof fileName !== 'string') {
    throw new Error(fileNameTypeError);
  }
}
