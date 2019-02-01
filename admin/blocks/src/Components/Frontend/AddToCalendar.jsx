const AddToCalendar = () => (
  <div>
    <input type="hidden" id="caltitle" value="'.$title.'" />
    <input type="hidden" id="calduration" value="'.$duration.'" />
    <input type="hidden" id="caladdress" value="'.$address.'" />
    <input type="hidden" id="caldescription" value="'.$description.'" />
    <input type="hidden" id="caltext" value="'.$text.'" />
    <input type="hidden" id="caldatetime" value="'.$date.' '.$time.' '.$zone.'" />
    <div id="iip_calendar" />
  </div>
);

export default AddToCalendar;
