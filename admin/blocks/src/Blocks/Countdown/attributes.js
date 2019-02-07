const attributes = {
  date: {
    type: 'string',
    default: new Date()
  },
  text: {
    type: 'string',
    default: 'true'
  },
  timezone: {
    type: 'string',
    default: '+00:00'
  },
  width: {
    type: 'string',
    default: '1000'
  }
};

export default attributes;
