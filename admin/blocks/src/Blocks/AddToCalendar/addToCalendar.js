/* eslint-disable react/prop-types */
import { attributes } from './attributes';
import { setEventMeta } from './logic';

import timezones from '../../utils/timezones.json';
import {
  getLocale, getTimezones, covertMinToHr, twelveHoursCheck
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

    const zones = getTimezones( timezones );

    const updateTimeZone = ( e ) => {
      const zoneValues = JSON.parse( e.target.value );

      setAttributes( {
        timezone: zoneValues
      } );

      updateEvent();
    };

    return (
      <Fragment>
        <div className="iip-gut-add-to-cal" style={ { justifyContent: alignment } }>
          <div className="iip-gut-add-to-cal-container">
            <button className="iip-gut-add-to-cal-button" type="button">
              { buttonText }
            </button>
          </div>
        </div>
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
              onChange={ updateDuration }
              type="text"
              value={ duration.min }
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
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-align-input">
            Button alignment:
            <select
              className="iip-gut-inspector-input medium"
              id="iip-calendar-align-input"
              name="alignment"
              onChange={ updateValue }
              value={ alignment }
            >
              <option value="center">Center</option>
              <option value="flex-start">Left</option>
              <option value="flex-end">Right</option>
            </select>
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
              value={ JSON.stringify( timezone ) }
            >
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
