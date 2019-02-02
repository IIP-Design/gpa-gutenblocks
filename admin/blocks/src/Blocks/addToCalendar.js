/* eslint-disable react/prop-types */

import AddToCalendar from '../Components/Frontend/AddToCalendar';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'calendar-alt',
  attributes: {
    address: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    duration: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    time: {
      type: 'string'
    },
    timezone: {
      type: 'string'
    },
    title: {
      type: 'string'
    }
  },
  edit( props ) {
    const {
      attributes: {
        address, date, description, duration, text, time, timezone, title
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
        <AddToCalendar
          address={ address }
          date={ date }
          description={ description }
          duration={ duration }
          text={ text }
          time={ time }
          timezone={ timezone }
          title={ title }
        />
        <InspectorControls>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-title-input">
            Event title:
            <input
              id="iip-calendar-title-input"
              name="title"
              onChange={ updateValue }
              type="text"
              value={ title }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-duration-input">
            Duration (in minutes):
            <input
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
              id="iip-calendar-address-input"
              name="address"
              onChange={ updateValue }
              type="text"
              value={ address }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-calendar-description-input">
            Event description:
            <input
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
              id="iip-calendar-text-input"
              name="text"
              onChange={ updateValue }
              type="text"
              value={ text }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-date-input">
            Date:
            <input
              id="iip-chatroll-date-input"
              name="date"
              onChange={ updateValue }
              type="text"
              value={ date }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-time-input">
            Time:
            <input
              id="iip-chatroll-time-input"
              name="time"
              onChange={ updateValue }
              type="text"
              value={ time }
            />
          </label>
          <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-timezone-input">
            Timezone:
            <input
              id="iip-chatroll-timezone-input"
              name="timezone"
              onChange={ updateValue }
              type="text"
              value={ timezone }
            />
          </label>
        </InspectorControls>
      </Fragment>
    );
  },
  save( props ) {
    const {
      attributes: {
        address, date, description, duration, text, time, timezone, title
      }
    } = props;

    return (
      <AddToCalendar
        address={ address }
        date={ date }
        description={ description }
        duration={ duration }
        text={ text }
        time={ time }
        timezone={ timezone }
        title={ title }
      />
    );
  }
} );
