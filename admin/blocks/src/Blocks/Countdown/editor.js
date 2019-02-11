import {
  bool, func, string, object
} from 'prop-types';

import CountdownFrontend from './frontend';
import EditorModal from '../../Components/EditorModal';
import timezones from '../../utils/timezones.json';
import { getLocale, getTimezones, twelveHoursCheck } from '../../utils/time';

const { wp } = window;
const { DateTimePicker } = wp.components;
const { Fragment } = wp.element;

const zones = getTimezones( timezones );

const CountdownEditor = ( {
  date, isOpen, text, timezone, width, toggleModal,
  updateDate, updateIsOpen, updateTimezone, updateValue
} ) => (
  <Fragment>
    <CountdownFrontend
      date={ date }
      onClick={ updateIsOpen }
      text={ text }
      timezone={ timezone }
      width="500"
    />
    <EditorModal
      isOpen={ isOpen }
      onClick={ toggleModal }
      title="Configure the countdown"
    >
      <div className="iip-gut-date-picker">
        <DateTimePicker
          currentDate={ date }
          is12Hour={ twelveHoursCheck }
          locale={ getLocale }
          onChange={ updateDate }
        />
      </div>
      <label className="iip-gut-inspector-label" htmlFor="iip_event_timezone">
        Timezone:
        <select
          className="iip-gut-inspector-input"
          id="iip_event_timezone"
          name="timezone"
          onChange={ updateTimezone }
          value={ JSON.stringify( timezone ) }
        >
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
          value={ text }
        >
          <option value="true">Show</option>
          <option value="false">Hide</option>
        </select>
      </label>
    </EditorModal>
  </Fragment>
);

CountdownEditor.propTypes = {
  date: string,
  isOpen: bool,
  updateIsOpen: func,
  text: string,
  timezone: object,
  width: string,
  toggleModal: func,
  updateDate: func,
  updateTimezone: func,
  updateValue: func
};

export default CountdownEditor;
