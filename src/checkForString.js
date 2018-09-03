import { dataTypeError, fileNameTypeError } from './errorMessages';

export function checkDataForString(data) {
  if (typeof data !== 'string') {
   throw new Error(dataTypeError);
  }
}

export function checkFileNameForString(fileName) {
  if (typeof fileName !== 'string') {
   throw new Error(fileNameTypeError);
  }
}
