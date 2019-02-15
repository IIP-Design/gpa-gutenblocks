export const isIframe = ( input ) => {
  const iframe = input.includes( '<iframe' );

  return iframe;
};

export const removeIframeOpenTags = ( input ) => {
  const regex = /(?:<iframe[^>])/gi;
  let tagless;

  if ( regex.test( input ) ) {
    tagless = input.replace( regex, '' );
  } else {
    tagless = input;
  }

  return tagless;
};

export const removeIframeCloseTags = ( input ) => {
  const regex = /(?:\/>)|(?:><\/iframe>)/gi;
  let tagless;

  if ( regex.test( input ) ) {
    tagless = input.replace( regex, '' );
  } else {
    tagless = input;
  }

  return tagless;
};

export const getIframeAtts = ( input ) => {
  if ( !isIframe( input ) ) {
    return;
  }

  const noOpenTags = removeIframeOpenTags( input );
  const attsOnly = removeIframeCloseTags( noOpenTags );

  return attsOnly;
};

export const rewriteIframe = ( input, classes ) => {
  const attributes = getIframeAtts( input );
  const iframe = `<iframe class="iip-gut-responsive-iframe ${classes}" ${attributes}></iframe>`;

  return iframe;
};
