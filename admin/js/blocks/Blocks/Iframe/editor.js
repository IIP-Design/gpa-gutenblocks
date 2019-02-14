import { func, string } from 'prop-types';

const { wp } = window;
const { Placeholder } = wp.components;

const IframeEditor = ( {
  classes, generateIframe, input, type, updateValue
} ) => (
  <Placeholder>
    <label htmlFor="iip-iframe-type-input">
      Select Type:
      <select
        id="iip-iframe-type-input"
        name="type"
        onChange={ updateValue }
        value={ type }
      >
        <option value="video">Video</option>
        <option value="calendar">Calendar</option>
      </select>
    </label>
    <label htmlFor="iip-iframe-input">
      Paste your iframe below:
      <textarea
        id="iip-iframe-input"
        name="input"
        onChange={ updateValue }
        value={ input }
      />
    </label>
    <label htmlFor="iip-iframe-classes-input">
      Add additional classes to iframe (optional):
      <input
        id="iip-iframe-classes-input"
        name="classes"
        onChange={ updateValue }
        type="text"
        value={ classes }
      />
    </label>
    <button onClick={ generateIframe } type="button">Save</button>
  </Placeholder>
);

IframeEditor.propTypes = {
  classes: string,
  generateIframe: func,
  input: string,
  type: string,
  updateValue: func
};

export default IframeEditor;
