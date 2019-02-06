/* eslint-disable react/prop-types */

import FrontendCountdown from '../Components/Frontend/Countdown';
import { getLocale, twelveHoursCheck } from '../utils/time';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { DateTimePicker } = wp.components;

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
      type: 'boolean'
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

    return (
      <Fragment>
        <FrontendCountdown
          date={ date }
          text={ text }
          timezone={ timezone }
          width={ width }
        />
        <InspectorControls>
          <DateTimePicker
            currentDate={ date }
            is12Hour={ twelveHoursCheck }
            locale={ getLocale }
            onChange={ updateDate }
          />
          <label className="iip-gut-inspector-label" htmlFor="iip-countdown-timezone-input">
            Timezone:
            <input
              id="iip-countdown-timezone-input"
              name="timezone"
              onChange={ updateValue }
              type="text"
              value={ timezone }
            />
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
              <option value>Show</option>
              <option value={ false }>Hide</option>
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
      <FrontendCountdown
        date={ date }
        text={ text }
        timezone={ timezone }
        width={ width }
      />
    );
  }
} );
