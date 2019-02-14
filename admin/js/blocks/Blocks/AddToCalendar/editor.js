import {
  bool, func, string, object
} from 'prop-types';

import EditorModal from '../../Components/EditorModal';

import timezones from '../../utils/timezones.json';
import { getLocale, getTimezones, twelveHoursCheck } from '../../utils/time';

const { wp } = window;
const { Fragment } = wp.element;
const { DateTimePicker } = wp.components;

const zones = getTimezones( timezones );

const AddToCalEditor = ( {
  alignment, buttonText, toggleModal, date, description, duration, isOpen, location,
  timezone, title, updateDate, updateDuration, updateIsOpen, updateTimezone, updateValue
} ) => (
  <Fragment>
    <div
      className="iip-gut-add-to-cal"
      onClick={ updateIsOpen }
      onKeyUp={ updateIsOpen }
      role="button"
      style={ { justifyContent: alignment } }
      tabIndex={ 0 }
    >
      <div className="iip-gut-add-to-cal-container">
        <button className="iip-gut-add-to-cal-button" type="button">
          { buttonText }
        </button>
      </div>
    </div>
    <EditorModal
      isOpen={ isOpen }
      onClick={ toggleModal }
      title="Set calendar event"
    >
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
    </EditorModal>
  </Fragment>
);

AddToCalEditor.propTypes = {
  alignment: string,
  buttonText: string,
  toggleModal: func,
  date: string,
  description: string,
  duration: object,
  isOpen: bool,
  location: string,
  timezone: object,
  title: string,
  updateDate: func,
  updateDuration: func,
  updateIsOpen: func,
  updateTimezone: func,
  updateValue: func
};

export default AddToCalEditor;
