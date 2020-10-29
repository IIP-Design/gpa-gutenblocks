/**
 * Return time remaining object from event date/time input
 *
 * @param {Date} endTime The time at which the countdown ends
 * @param {boolean} dst  Whether daylight savings is currently observed
 * @return {Object}      An object with the date parts broken out as properties
 */
export const getTimeRemaining = ( endTime, dst ) => {
  const delta = Date.parse( endTime ) - Date.parse( new Date() );
  const seconds = Math.floor( ( delta / 1000 ) % 60 );
  const minutes = Math.floor( ( delta / 1000 / 60 ) % 60 );
  const hours = Math.floor( ( delta / ( 1000 * 60 * 60 ) ) % 24 );
  const days = Math.floor( delta / ( 1000 * 60 * 60 * 24 ) );

  const timeRemaining = {
    delta,
    days,
    hours: dst ? hours - 1 : hours,
    minutes,
    seconds,
  };

  return timeRemaining;
};

/**
 * Resizes countdown to fit viewport
 *
 * @param {string} id  The id of the clock element.
 */
export const resizeClock = id => {
  const clock = document.getElementById( id );

  const clockWidth = clock.clientWidth;
  const bodyWidth = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 ) / 4;
  const fontSize = `${clockWidth / bodyWidth}vw`;

  clock.style.fontSize = fontSize;
};

/**
 * Retrieve the standard time offset value for the user's timezone.
 *
 * @returns {number}  The current offset from UTC in minutes.
 */
const stdTimezoneOffset = () => {
  const currentYear = new Date().getFullYear();

  const jan = new Date( currentYear, 0, 1 );
  const jul = new Date( currentYear, 6, 1 );

  return Math.max( jan.getTimezoneOffset(), jul.getTimezoneOffset() );
};

/**
 * Check whether daylight savings is observed.
 *
 * @param {Date} date   A JavaScript date object.
 * @returns {boolean}   Whether daylight savings is observed in the current timezone.
 */
const isDstObserved = date => date.getTimezoneOffset() < stdTimezoneOffset();

/**
 * Set up countdown clock
 */
export const initializeClock = () => {
  const clockDiv = document.getElementById( 'clockdiv' );

  if ( clockDiv ) {
    const clockId = 'clockdiv';
    const dateTime = document.getElementById( 'countdatetime' ).value;

    const endTime = new Date( dateTime );

    /* eslint-disable-next-line no-inner-declarations */
    function updateClock() {
      const clock = document.getElementById( 'clockdiv' );
      const time = getTimeRemaining( endTime, isDstObserved( endTime ) );

      const daysSpan = clock.querySelector( '.days' );
      const hoursSpan = clock.querySelector( '.hours' );
      const minutesSpan = clock.querySelector( '.minutes' );
      const secondsSpan = clock.querySelector( '.seconds' );

      daysSpan.innerHTML = ( time.days <= 0 ) ? 0 : time.days;
      hoursSpan.innerHTML = ( time.hours <= 0 ) ? '00' : ( `0${time.hours}` ).slice( -2 );
      minutesSpan.innerHTML = ( time.minutes <= 0 ) ? '00' : ( `0${time.minutes}` ).slice( -2 );
      secondsSpan.innerHTML = ( time.seconds <= 0 ) ? '00' : ( `0${time.seconds}` ).slice( -2 );

      if ( time.delta <= 0 ) {
        clearInterval( countdownInterval ); // eslint-disable-line no-use-before-define
      }
    }

    const countdownInterval = setInterval( updateClock, 1000 );

    resizeClock( clockId );
  }
};
