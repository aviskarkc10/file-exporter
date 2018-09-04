import { windowNotFoundError } from './errorMessages';

/**
 * Validate if an instance of browser window exists.
 */
export function checkForWindow () {
  if (!window) {
    throw new Error(windowNotFoundError);
  }
}
