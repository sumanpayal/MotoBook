import moment from 'moment';

type Format =
  | 'dateTime'
  | 'date'
  | '24hours'
  | '12hours'
  | 'timeWithoutSeconds'
  | 'startDateVehicle'
  | 'server'
  | 'yearMonth'
  | 'newsDateTime'
  | 'timeFormat';

export const formatDate = (date: Date | string, format?: Format) => {
  // if (isEmpty(date) || isNumber(date)) return ''
  switch (format) {
    case 'date':
      return moment(date).format('DD MMM yyyy');
    case 'dateTime':
      return moment(date).format('DD MMM yyyy HH:mm:ss');
    case 'yearMonth':
      return moment(date).format('YYYY-MM');
    case 'dateTime':
      return moment(date).format('DD MMM yyyy hh:mm A');
    case '24hours':
      return moment(date).format('HH:mm');
    case '12hours':
      return moment(date).format('hh:mm A');
    case 'timeFormat':
      return moment(date).format('h:m A');
    case 'server':
      return moment(date).format('yyyy-MM-DDTHH:mm:ss[z]');
    case 'startDateVehicle':
      return moment(date).format('yyyy-MM-DD')
      case 'newsDateTime':
      return moment(date).format('DD MMM yyyy HH:mm:ss');
    default:
      return moment(date).format('DD MMM yyyy');
  }
};

/**
 * To get time difference from current time eg - 1 hr ago
 * @param date - Date object
 * @param hideSuffix - Boolean to hide/show 'ago' Default true
 * @returns time ago string 1 hr ago
 */
export function timeAgo(date: Date | string, hideSuffix = true): string {
  const now = new Date().getTime() - 5.5 * 60 * 60 * 1000;
  const d = new Date(date).getTime();
  const diffInSeconds = Math.floor((now - d) / 1000);

  if (diffInSeconds < 60) return 'just now';
  else return moment(date).fromNow(hideSuffix);
}

/**
 * Converts a UTC date string to a local date string.
 * @param utcDateString - The UTC date string to convert.
 * @param locale - Optional locale for formatting the output (default: 'en-US').
 * @returns A local date string in the specified locale format.
 */
export function utcToLocale(
  utcDateString: string,
  locale: string = 'en-US',
): string {
  const utcDate = new Date(utcDateString);
  if (isNaN(utcDate.getTime())) {
    throw new Error('Invalid UTC date string');
  }
  return utcDate.toLocaleString(locale);
}

/**
 * Converts a local date string to a UTC date string.
 * @param localDateString - The local date string to convert.
 * @returns A UTC date string.
 */
export function localeToUtc(localDateString: string): string {
  const localDate = new Date(localDateString);
  if (isNaN(localDate.getTime())) {
    throw new Error('Invalid local date string');
  }
  return localDate.toISOString();
}

/**
 * Adds the specified number of years to the given date string.
 *
 * @param dateString - The date string to modify (in YYYY-MM-DD format).
 * @param years - The number of years to add.
 * @returns The modified date string (in YYYY-MM-DD format).
 */
export const addYears = (givenDate: Date, years: number): string => {
  givenDate.setFullYear(givenDate.getFullYear() + years); // Add years to the current year
  return givenDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
};

/**
 * Subtracts the specified number of years from the given date.
 *
 * @param givenDate - The original date from which years will be subtracted.
 * @param years - The number of years to subtract.
 * @returns The modified date string (in YYYY-MM-DD format).
 */
export const subtractYears = (givenDate: Date, years: number): string => {
  givenDate.setFullYear(givenDate.getFullYear() - years); // Subtract years to the current year
  return givenDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
};

/**
 * Returns the current date as a string in the format 'YYYY-MM-DD'.
 *
 * @returns The current date as a string in the format 'YYYY-MM-DD'.
 */
export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
