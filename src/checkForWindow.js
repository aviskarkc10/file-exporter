import { windowNotFoundError } from './errorMessages';

export function checkForWindow() {
  if (!window) {
    throw new Error(windowNotFoundError);
  }
}
