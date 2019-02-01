import { string } from 'prop-types';

const { Fragment } = window.wp.element;

const FrontendChatroll = ( {
  alignment, domain, height, id, name, offsetX, offsetY, title, width
} ) => (
  <Fragment>
    <div
      className="iip_chatroll"
      style={ `${alignment}: ${offsetX}px, bottom: ${offsetY}px;` }
    >
      <div className="chatroll_topbar" style={ { width: '100px' } }>
        { title }
        <div className="iip_toggle">
          <div className="iip_one" />
          <div className="iip_two" />
        </div>
      </div>
      <iframe
        className=""
        width={ width }
        height={ height }
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        allowTransparency="true"
        src={ `https://${domain}/embed/chat/${name}?id=${id}&platform=html` }
        title="IIP Chatroll"
      />
    </div>
  </Fragment>
);

FrontendChatroll.propTypes = {
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

export default FrontendChatroll;
