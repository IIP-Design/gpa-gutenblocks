/* eslint-disable react/prop-types */
import CountdownEditor from './editor';
import CountdownFrontend from './frontend';

import { attributes } from './attributes';
import { initializeClock } from './logic';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * The block type name not updated from iip-gut to gpalab-gut
 * in order to maintain backwards compatibility.
 */
registerBlockType( 'iip-gut/countdown', {
  title: __( 'Countdown', 'gpalab-gutenblocks' ),
  description: __( 'Insert configurable countdown component', 'gpalab-gutenblocks' ),
  category: 'gpa_custom_blocks',
  icon: 'clock',
  keywords: [
    __( 'interactive', 'gpalab-gutenblocks' ),
    __( 'timer', 'gpalab-gutenblocks' ),
    __( 'gpa', 'gpalab-gutenblocks' ),
  ],
  attributes,
  edit( props ) {
    const {
      attributes: {
        date, isOpen, text, timezone, width,
      },
      setAttributes,
    } = props;

    const updateIsOpen = () => {
      const newState = !isOpen;

      setAttributes( {
        isOpen: newState,
      } );
    };

    const updateValue = e => {
      setAttributes( {
        [e.target.name]: e.target.value,
      } );
    };

    const updateDate = e => {
      setAttributes( {
        date: e,
      } );
    };

    const updateTimezone = e => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues,
      } );
    };

    const toggleModal = () => {
      updateIsOpen();
      initializeClock();
    };

    return (
      <CountdownEditor
        date={ date }
        isOpen={ isOpen }
        text={ text }
        timezone={ timezone }
        width={ width }
        toggleModal={ toggleModal }
        updateDate={ updateDate }
        updateIsOpen={ updateIsOpen }
        updateTimezone={ updateTimezone }
        updateValue={ updateValue }
      />
    );
  },
  save( props ) {
    const {
      attributes: {
        date, text, timezone, width,
      },
    } = props;

    return (
      <CountdownFrontend
        date={ date }
        text={ text }
        timezone={ timezone }
        width={ width }
      />
    );
  },
} );
