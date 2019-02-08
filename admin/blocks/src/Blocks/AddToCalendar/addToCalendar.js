/* eslint-disable react/prop-types */
import { AddToCalendarDropdown } from './frontend';
import { attributes } from './attributes';

import timezones from '../../utils/timezones.json';
import { stripSpecialChars } from '../../utils/helpers';
import {
  getEndDate, getLocale, getTimezones, twelveHoursCheck
} from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { DateTimePicker } = wp.components;

registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'calendar-alt',
  attributes,
  edit( props ) {
    const {
      attributes: {
        buttonText, date, description, duration, location, timezone, title
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

    const zones = getTimezones( timezones );

    const updateTimeZone = ( e ) => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues
      } );
    };

    const startDatetime = stripSpecialChars( `${date}` );
    const endDatetime = stripSpecialChars( getEndDate( date, duration, timezone.gmtOffset ) );

    const event = {
      description,
      duration,
      endDatetime,
      location,
      startDatetime,
      timezone: timezone.value,
      title
    };

    return (
      <Fragment>
        <AddToCalendarDropdown
          buttonText={ buttonText }
          event={ event }
        />
        <InspectorControls>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-title-input">
            Title:
            <input
              className="iip-gut-inspector-input medium"
              id="iip-calendar-title-input"
              name="title"
              onChange={ updateValue }
              type="text"
              value={ title }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-duration-input">
            Duration (in min):
            <input
              className="iip-gut-inspector-input medium"
              id="iip-calendar-duration-input"
              name="duration"
              onChange={ updateValue }
              type="text"
              value={ duration }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-address-input">
            Address/URL:
            <input
              className="iip-gut-inspector-input medium"
              id="iip-calendar-address-input"
              name="location"
              onChange={ updateValue }
              type="text"
              value={ location }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-description-input">
            Description:
            <input
              className="iip-gut-inspector-input medium"
              id="iip-calendar-description-input"
              name="description"
              onChange={ updateValue }
              type="text"
              value={ description }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-text-input">
            Button text:
            <input
              className="iip-gut-inspector-input medium"
              id="iip-calendar-text-input"
              name="buttonText"
              onChange={ updateValue }
              type="text"
              value={ buttonText }
            />
          </label>
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
        </InspectorControls>
      </Fragment>
    );
  },
  save( props ) {
    const {
      attributes: {
        buttonText, date, description, duration, location, timezone, title
      }
    } = props;

    const startDatetime = stripSpecialChars( `${date}` );
    const endDatetime = stripSpecialChars( getEndDate( date, duration, timezone.gmtOffset ) );

    const event = {
      description,
      duration,
      endDatetime,
      location,
      startDatetime,
      timezone: timezone.value,
      title
    };

    return (
      <AddToCalendarDropdown
        buttonText={ buttonText }
        event={ event }
      />
    );
  }
} );
