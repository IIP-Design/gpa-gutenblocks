import defaultBlocks from './utils/defaultBlocks.json';

const { wp } = window;
const { unregisterBlockType } = wp.blocks;
const { enabledBlocks } = window.iipGutenblocks || {};
const { blockType } = defaultBlocks;

const getHandle = ( group, reference ) => {
  const { handle } = blockType[group][reference];

  return handle;
};

wp.domReady( () => {
  const disabled = [];
  const groups = [
    'common', 'embed', 'formatting', 'layout', 'widgets'
  ];

  groups.forEach( group => (
    enabledBlocks[group].forEach( ( item ) => {
      if ( Object.values( item )[0] === 'disabled' ) {
        const disabledItem = Object.keys( item )[0];
        const handle = getHandle( group, disabledItem );
        disabled.push( handle );
      }

      return disabled;
    } )
  ) );

  disabled.forEach( handle => (
    unregisterBlockType( handle )
  ) );
} );
