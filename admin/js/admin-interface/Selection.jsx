import { string } from 'prop-types';

const { wp } = window;
const { Icon } = wp.components;

const Selection = ( { icon, isEnabled, name } ) => (
  <div className="iip-gut-block-selector">
    <div className={ `iip-gut-block-selector-item ${isEnabled}` }>
      <Icon
        icon={ (
          <svg>
            { icon.map( path => ( <path d={ path } /> ) ) }
          </svg>
        ) }
      />
      <strong>{ name }</strong>
    </div>
  </div>
);

Selection.propTypes = {
  icon: string,
  isEnabled: string,
  name: string
};

export default Selection;
