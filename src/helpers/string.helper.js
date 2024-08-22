/**
 *Capitalize the first letter of message
 * @param {string} message
 * @returns {string}
 */
export const capitalizeText = (message) =>
  message[0].toUpperCase() + message.substring(1) + ".";
