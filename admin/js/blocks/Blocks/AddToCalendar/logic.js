import { stripSpecialChars } from '../../utils/helpers';
import { getEndDate } from '../../utils/time';

export const setEventMeta = ( date, description, duration, location, timezone, title ) => {
  const startDatetime = stripSpecialChars( `${date}` );
  const endDatetime = stripSpecialChars( getEndDate( date, duration.min, timezone.gmtOffset ) );

  const event = {
    description,
    duration: duration.hrs,
    endDatetime,
    location,
    startDatetime,
    timezone: timezone.value,
    title,
  };

  const encodedEvent = JSON.stringify( event );

  return encodedEvent;
};
