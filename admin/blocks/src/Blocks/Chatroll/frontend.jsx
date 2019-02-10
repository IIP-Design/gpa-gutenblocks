import { string } from 'prop-types';

const { Fragment } = window.wp.element;

const ChatrollFrontend = ( {
  alignment, domain, height, id, name, offsetX, offsetY, title, width
} ) => (
  <Fragment>
    <div
      className="iip-chatroll"
      style={ `${alignment}: ${offsetX}px; bottom: ${offsetY}px;` }
    >
      <div className="iip-chatroll-topbar" style={ `width: ${width}px` }>
        { title }
        <div className="iip-chatroll-toggle">
          <div className="iip-chatroll-dash" />
          <div className="iip-chatroll-minimize" />
        </div>
      </div>
      <iframe
        allowTransparency="true"
        className="iip-chatroll-iframe"
        frameBorder="0"
        height={ height }
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src={ `https://${domain}/embed/chat/${name}?id=${id}&platform=html` }
        title="IIP Chatroll"
        width={ width }
      />
    </div>
  </Fragment>
);

ChatrollFrontend.propTypes = {
  alignment: string,
  domain: string,
  height: string,
  id: string,
  name: string,
  offsetX: string,
  offsetY: string,
  title: string,
  width: string
};

export default ChatrollFrontend;
