import { getUtcDate } from '../../utils/time';

const defaultDate = getUtcDate( new Date() );

export const attributes = {
  date: {
    type: 'string',
    default: defaultDate
  },
  isOpen: {
    type: 'boolean',
    default: false
  },
  text: {
    type: 'string',
    default: 'true'
  },
  timezone: {
    type: 'object',
    default: {
      abbreviation: 'EST',
      commonName: 'Eastern Standard Time',
      gmtOffset: '-05:00',
      value: 'US/Eastern'
    }
  },
  width: {
    type: 'string',
    default: '750'
  }
};
