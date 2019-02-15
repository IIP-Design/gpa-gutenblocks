import { func, string } from 'prop-types';

const { wp } = window;
const { Placeholder } = wp.components;

const IframeEditor = ( {
  classes, generateIframe, input, outline, shadow, type, updateValue
} ) => (
  <Placeholder icon="editor-code" label="Responsive Iframe">
    <form className="iip-gut-flex-column">
      <label className="iip-gut-panel-label" htmlFor="iip-iframe-input">
        Paste your iframe below:
        <textarea
          id="iip-iframe-input"
          name="input"
          onChange={ updateValue }
          style={ { height: '9em' } }
          value={ input }
        />
      </label>
      <div className="iip-gut-flex-row">
        <label className="iip-gut-panel-label half" htmlFor="iip-iframe-type-input">
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
        <label className="iip-gut-panel-label half" htmlFor="iip-iframe-classes-input">
          Add extra classes (optional):
          <input
            id="iip-iframe-classes-input"
            name="classes"
            onChange={ updateValue }
            type="text"
            value={ classes }
          />
        </label>
      </div>
      <div className="iip-gut-flex-row">
        <label className="iip-gut-panel-label half" htmlFor="iip-iframe-shadow-input">
          Add shadow?:
          <select
            id="iip-iframe-shadow-input"
            name="shadow"
            onChange={ updateValue }
            value={ shadow }
          >
            <option value="">No</option>
            <option value="shadow">Yes</option>
          </select>
        </label>
        <label className="iip-gut-panel-label half" htmlFor="iip-iframe-outline-input">
          Add outline?:
          <select
            id="iip-iframe-outline-input"
            name="outline"
            onChange={ updateValue }
            value={ outline }
          >
            <option value="">No</option>
            <option value="outline">Yes</option>
          </select>
        </label>
      </div>
      <div className="iip-gut-flex-row" style={ { justifyContent: 'flex-end' } }>
        <button
          onClick={ generateIframe }
          type="button"
        >
          Save
        </button>
      </div>
    </form>
  </Placeholder>
);

IframeEditor.propTypes = {
  classes: string,
  generateIframe: func,
  input: string,
  outline: string,
  shadow: string,
  type: string,
  updateValue: func
};

export default IframeEditor;
