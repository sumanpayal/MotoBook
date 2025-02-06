/**
 * To validate the given email
 * @param email Email string to validate
 * @returns boolean
 */
export const isValidEmail = (email: string) => {
  //eslint-disable-next-line
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number.
 * Accepts numbers with or without country code, dashes, or spaces.
 * @param phoneNumber - The phone number string to validate.
 * @returns `true` if the phone number is valid, otherwise `false`.
 */
export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{7,14}$/; // E.164 format
  return phoneRegex.test(phoneNumber.trim());
}

/**
 * Checks and returns if the given input string has numbers/digits and special characters in it
 *
 * @param {string} inpStr - Input string on which we do the check
 * @returns {boolean} - if string contains numbers or special characters .
 */
export const containsDigitOrSpecianCharacters = (inpStr: string) => {
  const hasNumbersOrSpecialChars = /[\d\W_]/.test(inpStr);
  return hasNumbersOrSpecialChars;
};
