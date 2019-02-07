import { string } from 'prop-types';

const AddToCalendar = ( {
  address, date, description, duration, text, time, title, zone
} ) => (
  <div>
    <input type="hidden" id="caltitle" value={ title } />
    <input type="hidden" id="calduration" value={ duration } />
    <input type="hidden" id="caladdress" value={ address } />
    <input type="hidden" id="caldescription" value={ description } />
    <input type="hidden" id="caltext" value={ text } />
    <input type="hidden" id="caldatetime" value={ `${date} ${time} ${zone}` } />
    <div id="iip_calendar" />
  </div>
);

AddToCalendar.propTypes = {
  address: string,
  date: string,
  description: string,
  duration: string,
  text: string,
  time: string,
  title: string,
  zone: string
};

export default AddToCalendar;
