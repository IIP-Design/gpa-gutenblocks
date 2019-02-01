/* eslint-disable react/prop-types */

import FrontendCountdown from '../Components/Frontend/Countdown';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

registerBlockType( 'iip-gut/countdown', {
  title: __( 'Countdown', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'clock',
  attributes: {
    date: {
      type: 'string'
    },
    text: {
      type: 'bool'
    },
    time: {
      type: 'string'
    },
    timezone: {
      type: 'string'
    },
    width: {
      type: 'string'
    }
  },
  edit( props ) {
    const {
      attributes: {
        date, text, time, timezone, width
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
        <FrontendCountdown
          date={ date }
          text={ text }
          time={ time }
          timezone={ timezone }
          width={ width }
        />
        <InspectorControls>
          <label htmlFor="iip-chatroll-date-input">
            Date:
            <input
              id="iip-chatroll-date-input"
              name="date"
              onChange={ updateValue }
              type="text"
              value={ date }
            />
          </label>
          <label htmlFor="iip-chatroll-time-input">
            Time:
            <input
              id="iip-chatroll-time-input"
              name="time"
              onChange={ updateValue }
              type="text"
              value={ time }
            />
          </label>
          <label htmlFor="iip-chatroll-timezone-input">
            Timezone:
            <input
              id="iip-chatroll-timezone-input"
              name="timezone"
              onChange={ updateValue }
              type="text"
              value={ timezone }
            />
          </label>
          <label htmlFor="iip-chatroll-width-input">
            Width (in px):
            <input
              id="iip-chatroll-width-input"
              name="width"
              onChange={ updateValue }
              type="text"
              value={ width }
            />
          </label>
          <label htmlFor="iip-chatroll-text-input">
            Date Text:
            <select id="iip-chatroll-text-input" name="text" onChange={ updateValue }>
              { text ? (
                <option value={ text }>{ text }</option>
              ) : (
                <option value>Show</option>
              ) }
              <option value={ false }>Hide</option>
            </select>
          </label>
        </InspectorControls>
      </Fragment>
    );
  },
  save() {
    return (
      <FrontendCountdown />
    );
  }
} );
