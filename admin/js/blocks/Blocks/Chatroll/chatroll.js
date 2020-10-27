/* eslint-disable react/prop-types */
import ChatrollEditor from './editor';
import ChatrollFrontend from './frontend';

import attributes from './attributes';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'iip-gut/chatroll', {
  title: __( 'Chatroll', 'iip-gutenblocks' ),
  description: __( 'Insert chatroll component', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'testimonial',
  keywords: [
    __( 'interactive', 'iip-gutenblocks' ),
    __( 'chat', 'iip-gutenblocks' ),
    __( 'iip', 'iip-gutenblocks' ),
  ],
  attributes,
  edit( props ) {
    const {
      attributes: {
        alignment, domain, height, id, name, offsetX, offsetY, title, width,
      },
      setAttributes,
    } = props;

    const updateValue = e => {
      setAttributes( {
        [e.target.name]: e.target.value,
      } );
    };

    return (
      <ChatrollEditor
        alignment={ alignment }
        domain={ domain }
        height={ height }
        id={ id }
        name={ name }
        offsetX={ offsetX }
        offsetY={ offsetY }
        title={ title }
        width={ width }
        updateValue={ updateValue }
      />
    );
  },
  save( props ) {
    const {
      attributes: {
        alignment, domain, height, id, name, offsetX, offsetY, title, width,
      },
    } = props;

    return (
      <ChatrollFrontend
        alignment={ alignment }
        domain={ domain }
        height={ height }
        id={ id }
        name={ name }
        offsetX={ offsetX }
        offsetY={ offsetY }
        title={ title }
        width={ width }
      />
    );
  },
} );
