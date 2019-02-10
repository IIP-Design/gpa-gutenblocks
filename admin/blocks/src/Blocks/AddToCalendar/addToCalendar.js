/* eslint-disable react/prop-types */
import AddToCalEditor from './editor';
import { attributes } from './attributes';
import { setEventMeta } from './logic';

import { covertMinToHr } from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'calendar-alt',
  attributes,
  edit( props ) {
    const {
      attributes: {
        alignment, buttonText, date, description, duration, location, timezone, title
      },
      setAttributes
    } = props;

    const updateEvent = () => {
      const eventMeta = setEventMeta( date, description, duration, location, timezone, title );

      setAttributes( {
        event: eventMeta
      } );
    };

    const updateValue = ( e ) => {
      setAttributes( {
        [e.target.name]: e.target.value
      } );

      updateEvent();
    };

    const updateDuration = ( e ) => {
      const min = e.target.value;
      const hrs = covertMinToHr( min );

      const newDuration = {
        min,
        hrs
      };

      setAttributes( {
        duration: newDuration
      } );

      updateEvent();
    };

    const updateDate = ( e ) => {
      setAttributes( {
        date: e
      } );

      updateEvent();
    };

    const updateTimezone = ( e ) => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues
      } );

      updateEvent();
    };

    return (
      <AddToCalEditor
        alignment={ alignment }
        buttonText={ buttonText }
        date={ date }
        description={ description }
        duration={ duration }
        location={ location }
        timezone={ timezone }
        title={ title }
        updateDate={ updateDate }
        updateDuration={ updateDuration }
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
  }
} );
