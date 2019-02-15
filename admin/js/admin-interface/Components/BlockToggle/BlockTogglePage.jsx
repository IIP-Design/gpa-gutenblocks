import { array, string } from 'prop-types';
import BlockToggle from './BlockToggle';

const BlockTogglePage = ( { blockGroup, groupName } ) => (
  <div className="iip-gut-block-toggle-group">
    <h3 className="iip-gut-block-toggle-group-title">{ groupName }</h3>
    <div className="iip-gut-block-toggle-grid">
      { blockGroup.map( block => (
        <BlockToggle
          paths={ block.icon.paths || '' }
          isEnabled="enabled"
          name={ block.name || '' }
          polygons={ block.icon.polygons || '' }
          rects={ block.icon.rects || '' }
        />
      ) ) }
    </div>
  </div>
);

BlockTogglePage.propTypes = {
  blockGroup: array,
  groupName: string
};

export default BlockTogglePage;
