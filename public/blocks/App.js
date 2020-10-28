import { AddToCalendarDropdown } from './AddToCalendar';

const { addToCal } = window.gpaGutenblocks;

const App = () => (
  <AddToCalendarDropdown
    buttonProps={ { classes: 'iip-gut-add-to-cal-button' } }
    className="iip-gut-add-to-cal-container"
    dropdownProps={ { classes: 'iip-gut-add-to-cal-dropdown' } }
    linkProps={ { 'class': 'iip-gut-add-to-cal-link' } }
    event={ addToCal }
  />
);

export default App;
