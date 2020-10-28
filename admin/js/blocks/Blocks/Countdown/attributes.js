import { getUtcDate } from '../../utils/time';

const defaultDate = getUtcDate( new Date() );

export const attributes = {
  date: {
    type: 'string',
    'default': defaultDate,
  },
  isOpen: {
    type: 'boolean',
    'default': false,
  },
  text: {
    type: 'string',
    'default': 'true',
  },
  timezone: {
    type: 'object',
    'default': {
      abbreviation: 'UTC',
      commonName: 'UTC',
      gmtOffset: '+00:00',
      value: 'Etc/GMT',
    },
  },
  width: {
    type: 'string',
    'default': '750',
  },
};
