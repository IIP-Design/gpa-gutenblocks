const { wp } = window;
const { __, setLocaleData } = wp.i18n;


const FrontendCountdown = () => (
  <div className="iip_countdown">
    <input type="hidden" id="countdatetime" value="'.$date.' '.$time.' ' . $zone . '" />
    <div id="clockwrap">
      <div id="clockdiv" style={ { width: '200px' } }>
        <h1>$display</h1>
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

export default FrontendCountdown;
