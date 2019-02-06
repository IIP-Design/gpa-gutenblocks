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
