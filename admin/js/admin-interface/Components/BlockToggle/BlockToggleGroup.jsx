import { array, number, string } from 'prop-types';
import BlockToggle from './BlockToggle';

const BlockToggleGroup = ( { blockGroup, groupIndex, groupName } ) => (
  <div className="iip-gut-block-toggle-group">
    <h3 className="iip-gut-block-toggle-group-title">{ groupName }</h3>
    <div className="iip-gut-block-toggle-grid">
      { blockGroup.map( ( block, blockIndex ) => (
        <BlockToggle
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
  groupName: string
};

export default BlockToggleGroup;
