import { bool, func, string } from 'prop-types';

import { convertUtcString } from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;

const CountdownFrontend = ( {
  date, onClick, text, timezone, width
} ) => (
  <div
    className="iip_countdown"
    onClick={ () => onClick() }
    onKeyUp={ () => onClick() }
    role="button"
    tabIndex={ 0 }
  >
    <input type="hidden" id="countdatetime" value={ `${date}${timezone.gmtOffset}` } />
    <div id="clockwrap">
      <div id="clockdiv" style={ { width: `${width}px` } }>
        { ( text === 'true' ) && (
          <h1>{ convertUtcString( `${date}${timezone.gmtOffset}`, 'en-US' ) }</h1>
        ) }
        <div>
          <span className="days" />
          <div className="smalltext">
            { __( 'Days', 'iip-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="hours" />
          <div className="smalltext">
            { __( 'Hours', 'iip-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="minutes" />
          <div className="smalltext">
            { __( 'Minutes', 'iip-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="seconds" />
          <div className="smalltext">
            { __( 'Seconds', 'iip-gutenblocks' ) }
          </div>
        </div>
      </div>
    </div>
  </div>
);

CountdownFrontend.propTypes = {
  date: string,
  onClick: func,
  text: bool,
  timezone: string,
  width: string
};

export default CountdownFrontend;
