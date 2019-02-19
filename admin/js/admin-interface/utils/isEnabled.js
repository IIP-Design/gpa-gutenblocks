const { enabledBlocks } = window.iipGutenblocks || {};

const allEnabled = [
  {
    common: [
      { audio: 'enabled' },
      { cover: 'enabled' },
      { file: 'enabled' },
      { gallery: 'enabled' },
      { heading: 'enabled' },
      { image: 'enabled' },
      { list: 'enabled' },
      { paragraph: 'enabled' },
      { quote: 'enabled' },
      { video: 'enabled' }
    ]
  }, {
    formatting: [
      { code: 'enabled' },
      { freeform: 'enabled' },
      { html: 'enabled' },
      { preformatted: 'enabled' },
      { pullquote: 'enabled' },
      { table: 'enabled' },
      { verse: 'enabled' }
    ]
  }, {
    layout: [
      { button: 'enabled' },
      { columns: 'enabled' },
      { mediaText: 'enabled' },
      { more: 'enabled' },
      { nextpage: 'enabled' },
      { separator: 'enabled' },
      { spacer: 'enabled' }
    ]
  }, {
    widgets: [
      { archives: 'enabled' },
      { categories: 'enabled' },
      { latestComments: 'enabled' },
      { latestPosts: 'enabled' },
      { shortcode: 'enabled' }
    ]
  }, {
    embed: [
      { animoto: 'enabled' },
      { cloudup: 'enabled' },
      { collegehumor: 'enabled' },
      { dailymotion: 'enabled' },
      { embed: 'enabled' },
      { facebook: 'enabled' },
      { flickr: 'enabled' },
      { funnyordie: 'enabled' },
      { hulu: 'enabled' },
      { imgur: 'enabled' },
      { instagram: 'enabled' },
      { issuu: 'enabled' },
      { kickstarter: 'enabled' },
      { meetupCom: 'enabled' },
      { mixcloud: 'enabled' },
      { photobucket: 'enabled' },
      { polldaddy: 'enabled' },
      { reddit: 'enabled' },
      { reverbnation: 'enabled' },
      { screencast: 'enabled' },
      { scribd: 'enabled' },
      { slideshare: 'enabled' },
      { smugmug: 'enabled' },
      { speaker: 'enabled' },
      { spotify: 'enabled' },
      { soundcloud: 'enabled' },
      { ted: 'enabled' },
      { tumblr: 'enabled' },
      { twitter: 'enabled' },
      { videopress: 'enabled' },
      { vimeo: 'enabled' },
      { wordpress: 'enabled' },
      { wordpressTv: 'enabled' },
      { youtube: 'enabled' }
    ]
  }
];

const makeObjArr = ( obj ) => {
  const arr = [];
  const entries = Object.entries( obj );

  entries.map( ( entry ) => {
    const key = entry[0];
    const value = entry[1];
    const subObj = Object.assign( { [key]: value } );
    arr.push( subObj );
    return arr;
  } );

  return arr;
};

export const getBlockSettings = () => {
  const enabled = enabledBlocks ? makeObjArr( enabledBlocks ) : '';

  // console.log( 'enabled:', enabled, 'all', allEnabled );

  const blockSettings = enabled || allEnabled;

  return blockSettings;
};
