const { __experimentalGetSettings } = window.wp.date;

const settings = __experimentalGetSettings();

export const twelveHoursCheck = () => {
  // Checks if current timezone is a 12 hour time by looking for an "a" in the time format.
  // We also make sure this a is not escaped by a "/".
  const is12HourTime = /a(?!\\)/i.test(
    settings.formats.time
      .toLowerCase() // Test only the lower case a
      .replace( /\\\\/g, '' ) // Replace "//" with empty strings
      .split( '' ).reverse()
      .join( '' ) // Reverse the string and test for "a" not followed by a slash
  );

  return is12HourTime;
};

export const getLocale = () => {
  const { locale } = settings.l10n;

  return locale;
};

export const replaceGmtUtc = ( string ) => {
  let utcString;

  if ( string.includes( 'GMT' ) ) {
    utcString = string.replace( /GMT/gi, 'UTC' );
    return utcString;
  }

  return string;
};

export const getTimezones = ( input ) => {
  const { timezones } = input;

  return timezones;
};

export const getDateFromIso = ( isoString ) => {
  const date = new Date( isoString );

  return date;
};

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

export const getUtcDate = ( date ) => {
  const utcString = date.toUTCString();

  return utcString;
};

export const convertIsoToLocale = ( isoString, locale ) => {
  const dateFormat = getDateFromIso( isoString );
  const localeString = getLocaleDate( dateFormat, locale );

  return localeString;
};

export const convertUtcString = ( isoString ) => {
  const dateFormat = getDateFromIso( isoString );
  const gmtString = getUtcDate( dateFormat );
  const utcString = replaceGmtUtc( gmtString );

  return utcString;
};
