/* eslint-disable react/prop-types */

import Countdown from './frontend';
import attributes from './attributes';
import timezones from '../../utils/timezones.json';

import { initializeClock } from './logic';
import { getLocale, getTimezones, twelveHoursCheck } from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { DateTimePicker } = wp.components;

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

    const zones = getTimezones( timezones );

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

    initializeClock();

    return (
      <Fragment>
        <Countdown
          date={ date }
          text={ text }
          timezone={ timezone }
          width="500"
        />
        <InspectorControls>
          <DateTimePicker
            currentDate={ date }
            is12Hour={ twelveHoursCheck }
            locale={ getLocale }
            onChange={ updateDate }
          />
          <label htmlFor="iip_event_timezone">
            Timezone:
            <select id="iip_event_timezone" name="timezone" onChange={ updateValue }>
              { timezone ? (
                <option value={ timezone }>{ timezone }</option>
              ) : (
                <option value="">Select timezone</option>
              ) }
              { zones.map( zone => (
                <option value={ zone.gmtOffset }>{ `${zone.name} (GMT${zone.gmtOffset})` }</option>
              ) ) }
            </select>
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-countdown-width-input">
            Width (in px):
            <input
              id="iip-countdown-width-input"
              name="width"
              onChange={ updateValue }
              type="text"
              value={ width }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-countdown-text-input">
            Date Text:
            <select id="iip-countdown-text-input" name="text" onChange={ updateValue }>
              <option value="true">Show</option>
              <option value="false">Hide</option>
            </select>
          </label>
        </InspectorControls>
      </Fragment>
    );
  },
  save( props ) {
    const {
      attributes: {
        date, text, timezone, width
      }
    } = props;

    return (
      <Countdown
        date={ date }
        text={ text }
        timezone={ timezone }
        width={ width }
      />
    );
  }
} );
