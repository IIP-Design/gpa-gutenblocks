/* eslint-disable react/prop-types */

import Countdown from './frontend';
import timezones from '../../utils/timezones.json';

import { attributes } from './attributes';
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

    const updateTimeZone = ( e ) => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues
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
          <label className="iip-gut-inspector-label" htmlFor="iip_event_timezone">
            Timezone:
            <select
              className="iip-gut-inspector-input"
              id="iip_event_timezone"
              name="timezone"
              onChange={ updateTimeZone }
            >
              { timezone ? (
                <option value={ JSON.stringify( timezone ) }>
                  { `${timezone.abbreviation} (GMT${timezone.gmtOffset})` }
                </option>
              ) : (
                <option value="">Select timezone</option>
              ) }
              { zones.map( zone => (
                <option value={ JSON.stringify( zone.properties ) }>
                  { `${zone.name} (GMT${zone.properties.gmtOffset})` }
                </option>
              ) ) }
            </select>
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-countdown-width-input">
            Width (in px):
            <input
              className="iip-gut-inspector-input"
              id="iip-countdown-width-input"
              name="width"
              onChange={ updateValue }
              type="text"
              value={ width }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-countdown-text-input">
            Date Text:
            <select
              className="iip-gut-inspector-input"
              id="iip-countdown-text-input"
              name="text"
              onChange={ updateValue }
            >
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
