/* eslint-disable react/prop-types */

import FrontendChatroll from '../Components/Frontend/Chatroll';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

registerBlockType( 'iip-gut/chatroll', {
  title: __( 'Chatroll', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'testimonial',
  attributes: {
    alignment: {
      type: 'string'
    },
    domain: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    offsetX: {
      type: 'int'
    },
    offsetY: {
      type: 'int'
    },
    title: {
      type: 'string'
    },
    width: {
      type: 'string'
    }
  },
  edit( props ) {
    const {
      attributes: {
        alignment, domain, height, id, name, offsetX, offsetY, title, width
      },
      setAttributes
    } = props;

    const updateValue = ( e ) => {
      setAttributes( {
        [e.target.name]: e.target.value
      } );
    };

    return (
      <Fragment>
        <div>
          <h4>Chatroll inserted</h4>
          <p>Use block settings in the sidebar to configure</p>
        </div>
        <InspectorControls>
          <label htmlFor="iip-chatroll-title-input">
            Window title:
            <input
              id="iip-chatroll-title-input"
              name="title"
              onChange={ updateValue }
              placeholder={ __( 'Chat', 'iip-gutenblocks' ) }
              type="text"
              value={ title }
            />
          </label>
          <label htmlFor="iip-chatroll-width-input">
            Width:
            <input
              id="iip-chatroll-width-input"
              name="width"
              onChange={ updateValue }
              placeholder="450"
              type="text"
              value={ width }
            />
          </label>
          <label htmlFor="iip-chatroll-height-input">
            Height:
            <input
              id="iip-chatroll-height-input"
              name="height"
              onChange={ updateValue }
              placeholder="350"
              type="text"
              value={ height }
            />
          </label>
          <label htmlFor="iip-chatroll-id-input">
            ID:
            <input
              id="iip-chatroll-id-input"
              name="id"
              onChange={ updateValue }
              type="text"
              value={ id }
            />
          </label>
          <label htmlFor="iip-chatroll-name-input">
            Name:
            <input
              id="iip-chatroll-name-input"
              name="name"
              onChange={ updateValue }
              type="text"
              value={ name }
            />
          </label>
          <label htmlFor="iip-chatroll-domain-input">
            Domain:
            <input
              id="iip-chatroll-domain-input"
              name="domain"
              onChange={ updateValue }
              type="text"
              value={ domain }
            />
          </label>
          <label htmlFor="iip-chatroll-alignment-input">
            Alignment:
            <input
              id="iip-chatroll-alignment-input"
              name="alignment"
              onChange={ updateValue }
              type="text"
              value={ alignment }
            />
          </label>
          <label htmlFor="iip-chatroll-offsetX-input">
            Offset X
            <input
              id="iip-chatroll-offsetX-input"
              name="offsetX"
              onChange={ updateValue }
              type="text"
              value={ offsetX }
            />
          </label>
          <label htmlFor="iip-chatroll-offsetY-input">
            Offset Y:
            <input
              id="iip-chatroll-offsetY-input"
              name="offsetY"
              onChange={ updateValue }
              type="text"
              value={ offsetY }
            />
          </label>
        </InspectorControls>
      </Fragment>
    );
  },
  save( props ) {
    const {
      attributes: {
        domain, height, id, name, title, width
      }
    } = props;
    return (
      <FrontendChatroll
        domain={ domain }
        height={ height }
        id={ id }
        name={ name }
        title={ title }
        width={ width }
      />
    );
  }
} );
