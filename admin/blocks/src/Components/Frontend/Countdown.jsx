import { bool, string } from 'prop-types';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;

const FrontendCountdown = ( {
  date, text, time, timezone, width
} ) => (
  <div className="iip_countdown">
    <input type="hidden" id="countdatetime" value={ `${date} ${time} ${timezone}` } />
    <div id="clockwrap">
      <div id="clockdiv" style={ { width: `${width}px` } }>
        { text && (
          <h1>$display</h1>
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

FrontendCountdown.propTypes = {
  date: string,
  text: bool,
  time: string,
  timezone: string,
  width: string
};

export default FrontendCountdown;
