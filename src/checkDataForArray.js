import { dataArrayTypeError } from './errorMessages'

/**
 * Validate if fileName is of type string.
 *
 * @param {string} fileName
 */
export function checkDataForArray (data) {
  if (!Array.isArray(data)) {
    throw new Error(dataArrayTypeError);
  }
}
