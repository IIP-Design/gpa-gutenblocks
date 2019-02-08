import { object, string } from 'prop-types';

import { AddToCalendarDropdown } from './AddToCalendar';

const App = ( { buttonText, event } ) => (
  <AddToCalendarDropdown
    buttonText={ buttonText }
    event={ event }
  />
);

App.propTypes = {
  buttonText: string,
  event: object
};

export default App;
