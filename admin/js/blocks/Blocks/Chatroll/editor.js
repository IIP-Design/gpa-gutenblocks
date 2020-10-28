import { func, int, string } from 'prop-types';

import chatroll from './assets/chatroll-logo.png';

const { wp } = window;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { pluginUrl } = window.gpaGutenblocks;

const logoSrc = `${pluginUrl}/dist${chatroll}`;

const ChatrollEditor = ( {
  alignment, domain, height, id, name, offsetX, offsetY, title, width, updateValue,
} ) => (
  <Fragment>
    <div className="iip-gut-chatbox-notice">
      <h4 className="iip-gut-chatbox-mock-topbar">Chatroll Added</h4>
      <div className="iip-gut-image-container">
        <img src={ logoSrc } alt="" />
      </div>
    </div>
    <InspectorControls>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-title-input">
        { 'Window title: ' }
        <input
          id="iip-chatroll-title-input"
          name="title"
          onChange={ updateValue }
          type="text"
          value={ title }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-width-input">
        { 'Width: ' }
        <input
          id="iip-chatroll-width-input"
          name="width"
          onChange={ updateValue }
          type="text"
          value={ width }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-height-input">
        { 'Height: ' }
        <input
          id="iip-chatroll-height-input"
          name="height"
          onChange={ updateValue }
          type="text"
          value={ height }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-id-input">
        { 'ID: ' }
        <input
          id="iip-chatroll-id-input"
          name="id"
          onChange={ updateValue }
          type="text"
          value={ id }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-name-input">
        { 'Name: ' }
        <input
          id="iip-chatroll-name-input"
          name="name"
          onChange={ updateValue }
          type="text"
          value={ name }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-domain-input">
        { 'Domain: ' }
        <input
          id="iip-chatroll-domain-input"
          name="domain"
          onChange={ updateValue }
          type="text"
          value={ domain }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-alignment-input">
        { 'Alignment: ' }
        <input
          id="iip-chatroll-alignment-input"
          name="alignment"
          onChange={ updateValue }
          type="text"
          value={ alignment }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-offsetX-input">
        { 'Offset X: ' }
        <input
          id="iip-chatroll-offsetX-input"
          name="offsetX"
          onChange={ updateValue }
          type="text"
          value={ offsetX }
        />
      </label>
      <label className="iip-gut-inspector-label" htmlFor="iip-chatroll-offsetY-input">
        { 'Offset Y: ' }
        <input
          id="iip-chatroll-offsetY-input"
          name="offsetY"
          onChange={ updateValue }
          type="text"
          value={ offsetY }
        />
      </label>
    </InspectorControls>
  </Fragment>
);

ChatrollEditor.propTypes = {
  alignment: string,
  domain: string,
  height: string,
  id: string,
  name: string,
  offsetX: int,
  offsetY: int,
  title: string,
  width: string,
  updateValue: func,
};

export default ChatrollEditor;
