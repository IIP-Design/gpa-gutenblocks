/* eslint-disable react/prop-types */
import AddToCalEditor from './editor';
import { attributes } from './attributes';
import { setEventMeta } from './logic';

import { covertMinToHr } from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * The block type name not updated from iip-gut to gpalab-gut
 * in order to maintain backwards compatibility.
 */
registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'gpalab-gutenblocks' ),
  description: __( 'Inserts add to calendar button', 'gpalab-gutenblocks' ),
  category: 'gpa_custom_blocks',
  icon: 'calendar-alt',
  keywords: [
    __( 'interactive', 'gpalab-gutenblocks' ),
    __( 'calendar', 'gpalab-gutenblocks' ),
    __( 'gpa', 'gpalab-gutenblocks' ),
  ],
  attributes,
  edit( props ) {
    const {
      attributes: {
        alignment, buttonText, date, description, duration, isOpen, location, timezone, title,
      },
      setAttributes,
    } = props;

    const updateEvent = () => {
      const eventMeta = setEventMeta( date, description, duration, location, timezone, title );

      setAttributes( {
        event: eventMeta,
      } );
    };

    const updateValue = e => {
      setAttributes( {
        [e.target.name]: e.target.value,
      } );
    };

    const updateDuration = e => {
      const min = e.target.value;
      const hrs = covertMinToHr( min );

      const newDuration = {
        min,
        hrs,
      };

      setAttributes( {
        duration: newDuration,
      } );
    };

    const updateDate = e => {
      setAttributes( {
        date: e,
      } );
    };

    const updateIsOpen = () => {
      const newState = !isOpen;

      setAttributes( {
        isOpen: newState,
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
      updateEvent();
    };

    return (
      <AddToCalEditor
        alignment={ alignment }
        buttonText={ buttonText }
        date={ date }
        description={ description }
        duration={ duration }
        isOpen={ isOpen }
        location={ location }
        timezone={ timezone }
        title={ title }
        toggleModal={ toggleModal }
        updateDate={ updateDate }
        updateDuration={ updateDuration }
        updateIsOpen={ updateIsOpen }
        updateTimezone={ updateTimezone }
        updateValue={ updateValue }
      />
    );
  },
  save( props ) {
    const { attributes: { alignment } } = props;

    return (
      <div
        className="iip-gut-add-to-cal"
        id="iip-gut-add-to-cal"
        style={ { justifyContent: alignment } }
      />
    );
  },
} );
