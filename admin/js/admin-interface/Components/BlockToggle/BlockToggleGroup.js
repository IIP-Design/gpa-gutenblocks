import { array, number, string } from 'prop-types';
import BlockToggle from './BlockToggle';

const BlockToggleGroup = ( { blockGroup, groupIndex, groupName } ) => (
  <div className="gpalab-gut-block-toggle-group">
    <h3 className="gpalab-gut-block-toggle-group-title">{ groupName }</h3>
    <div className="gpalab-gut-block-toggle-grid">
      { blockGroup.map( ( block, blockIndex ) => (
        <BlockToggle
          key={ groupName }
          group={ groupName }
          groupIndex={ groupIndex }
          blockIndex={ blockIndex }
          reference={ Object.keys( block )[0] || '' }
        />
      ) ) }
    </div>
  </div>
);

BlockToggleGroup.propTypes = {
  blockGroup: array,
  groupIndex: number,
  groupName: string,
};

export default BlockToggleGroup;
