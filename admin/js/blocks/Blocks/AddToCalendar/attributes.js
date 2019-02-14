import { trimString } from '../../utils/helpers';
import { getIsoDate } from '../../utils/time';

const isoDate = getIsoDate( new Date() );
const defaultDate = trimString( isoDate, 5 );

export const attributes = {
  alignment: {
    type: 'string',
    default: 'center'
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
    type: 'string',
    default: ''
  },
  duration: {
    type: 'object',
    default: {
      min: 60,
      hrs: 1
    }
  },
  event: {
    type: 'string',
    source: 'meta',
    meta: 'iip_gut_atc_event'
  },
  isOpen: {
    type: 'boolean',
    default: false
  },
  location: {
    type: 'string',
    default: ''
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
    type: 'string',
    default: ''
  }
};