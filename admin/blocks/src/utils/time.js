import { trimString } from './helpers';

const { __experimentalGetSettings } = window.wp.date;
const settings = __experimentalGetSettings();


// Get's the browser locale using WordPress's built-in l10n package
export const getLocale = () => {
  const { locale } = settings.l10n;

  return locale;
};

// Returns a list of timezones from a input object that contains a timezones object
export const getTimezones = ( input ) => {
  const { timezones } = input;

  return timezones;
};

// ------ Datetime Manipulation Helper Functions ------ //

// Checks if current time is a 12 hour time by looking for an 'a' in the time format.
export const twelveHoursCheck = () => {
  const is12HourTime = /a(?!\\)/i.test(
    settings.formats.time
      .toLowerCase()
      .replace( /\\\\/g, '' )
      .split( '' ).reverse()
      .join( '' )
  );

  return is12HourTime;
};

// Replaces 'GMT' with 'UTC' in a string
export const replaceGmtUtc = ( string ) => {
  let utcString;

  if ( string.includes( 'GMT' ) ) {
    utcString = string.replace( /GMT/gi, 'UTC' );
    return utcString;
  }

  return string;
};

// Adds given number of minutes to existing date object
export const addMinutes = ( date, minutes ) => {
  const newDateObj = new Date( date.getTime() + minutes * 60000 );

  return newDateObj;
};

// ------ End Datetime Manipulation Helper Functions ------ //

// ------ Date Conversions ------ //

// Converts date from ISO string format (2019-02-09T20:25:41-05:00) to
// Date format (Sat Feb 09 2019 20:25:41 GMT-0500 (Eastern Standard Time))
export const getDateFromIso = ( isoString ) => {
  const date = new Date( isoString );

  return date;
};

// Converts date from Date format (Sat Feb 09 2019 20:25:41 GMT-0500 (Eastern Standard Time))
// to ISO string format (2019-02-09T20:25:41-05:00)
export const getIsoDate = ( date ) => {
  const isoString = date.toISOString();

  return isoString;
};

// Converts date from Date format (Sat Feb 09 2019 20:25:41 GMT-0500 (Eastern Standard Time))
// to UTC string format (Sat, 09 Feb 2019 20:25:41 GMT)
export const getUtcDate = ( date ) => {
  const utcString = date.toUTCString();

  return utcString;
};

// Converts date from ISO string format (2019-02-09T20:25:41-05:00) to
// UTC string format (Sun, 10 Feb 2019 01:25:41 UTC)
export const convertUtcString = ( isoString ) => {
  const dateFormat = getDateFromIso( isoString );
  const gmtString = getUtcDate( dateFormat );
  const utcString = replaceGmtUtc( gmtString );

  return utcString;
};

// Converts date from Date format (Sat Feb 09 2019 20:25:41 GMT-0500 (Eastern Standard Time)) to
// a localized date string with full weekday, month, and year; 12-hour time; and timzone abbreviation
// Example: For locale 'en-US', would return 'Friday, February 08, 2019, 12:45 PM EST'
export const getLocaleDate = ( date, locale ) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  };

  const localeString = date.toLocaleString( locale, options );

  return localeString;
};

// Converts an ISO string format date (2019-02-09T20:25:41-05:00) to a localized date
// string with full weekday, month, and year; 12-hour time; and timzone abbreviation
// Example: For locale 'en-US', would return 'Friday, February 08, 2019, 12:45 PM EST'
export const convertIsoToLocale = ( isoString, locale ) => {
  const dateFormat = getDateFromIso( isoString );
  const localeString = getLocaleDate( dateFormat, locale );

  return localeString;
};

// ------ End Date Conversions ------ //

// ------ Plugin-Specific Datetime Transformations ------ //

// Takes a date in ISO format (2019-02-09T20:25:41-05:00) adds a given
// duration in minutes, and returns the resulting date in ISO format
export const getEndDate = ( date, duration ) => {
  // Converts ISO string to more workable (faux) UTC date
  const convertedDate = getDateFromIso( `${date}.000Z` );

  // Adds duration
  const newDate = addMinutes( convertedDate, duration );

  // Converts newDate back into ISO string and removes the timezone
  const isoDate = getIsoDate( newDate );
  const trimTimezone = trimString( isoDate, 5 );

  return trimTimezone;
};
