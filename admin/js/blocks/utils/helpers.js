// Removes all non-alphanumeric characters from a string
export const stripSpecialChars = ( string ) => {
  const alphaNumString = string.replace( /[^a-zA-Z0-9]/g, '' );

  return alphaNumString;
};

// Removes 'x' number of characters from the end of a string
export const trimString = ( string, x ) => {
  const trimmedString = string.slice( 0, string.length - x );

  return trimmedString;
};
