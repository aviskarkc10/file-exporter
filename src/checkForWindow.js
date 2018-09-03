export function checkForWindow() {
  if (!window) {
    throw new Error('Window is not open.');
  }
}
