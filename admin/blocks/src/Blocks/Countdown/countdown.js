/* eslint-disable react/prop-types */
import CountdownEditor from './editor';
import CountdownFrontend from './frontend';

import { attributes } from './attributes';
import { initializeClock } from './logic';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'iip-gut/countdown', {
  title: __( 'Countdown', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'clock',
  attributes,
  edit( props ) {
    const {
      attributes: {
        date, text, timezone, width
      },
      setAttributes
    } = props;

    const updateValue = ( e ) => {
      setAttributes( {
        [e.target.name]: e.target.value
      } );
    };

    const updateDate = ( e ) => {
      setAttributes( {
        date: e
      } );
    };

    const updateTimezone = ( e ) => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues
      } );
    };

    initializeClock();

    return (
      <CountdownEditor
        date={ date }
        text={ text }
        timezone={ timezone }
        width={ width }
        updateDate={ updateDate }
        updateTimezone={ updateTimezone }
        updateValue={ updateValue }
      />
    );
  },
  save( props ) {
    const {
      attributes: {
        date, text, timezone, width
      }
    } = props;

    return (
      <CountdownFrontend
        date={ date }
        text={ text }
        timezone={ timezone }
        width={ width }
      />
    );
  }
} );
