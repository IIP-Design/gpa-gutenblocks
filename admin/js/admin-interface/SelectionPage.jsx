import { array, string } from 'prop-types';
import Selection from './Selection';

const SelectionPage = ( { blockGroup, groupName } ) => (
  <div className="iip-gut-block-selector-group">
    <h3 className="iip-gut-block-selector-group-title">{ groupName }</h3>
    <div className="iip-gut-block-selector-grid">
      { blockGroup.map( block => (
        <Selection
          icon={ block.icon }
          isEnabled="enabled"
          name={ block.name }
        />
      ) ) }
    </div>
  </div>
);

SelectionPage.propTypes = {
  blockGroup: array,
  groupName: string
};

export default SelectionPage;
