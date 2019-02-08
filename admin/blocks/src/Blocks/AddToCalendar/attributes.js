import { getIsoDate } from '../../utils/time';

const defaultDate = getIsoDate( new Date() );

export const attributes = {
  address: {
    type: 'string'
  },
  buttonText: {
    type: 'string',
    default: 'Add to Calendar'
  },
  date: {
    type: 'string',
    default: defaultDate
  },
  description: {
    type: 'string'
  },
  duration: {
    type: 'int',
    default: 60
  },
  location: {
    type: 'string'
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
  title: {
    type: 'string'
  }
};
