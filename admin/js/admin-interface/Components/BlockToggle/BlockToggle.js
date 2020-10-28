import { number, string } from 'prop-types';

import { Consumer } from '../EnabledContext';
import defaultBlocks from '../../utils/defaultBlocks.json';

const { wp } = window;
const { Icon } = wp.components;
const { blockType } = defaultBlocks;

const BlockToggle = ( {
  blockIndex, group, groupIndex, reference,
} ) => {
  const { icon } = blockType[group][reference] || {};

  return (
    <div className="gpalab-gut-block-toggle">
      <Consumer>
        { context => {
          const item = context.blockSettings[groupIndex][group][blockIndex];
          const isEnabled = item[reference];

          return (
            <div
              className={ `gpalab-gut-block-toggle-item ${isEnabled}` }
              onClick={ () => { context.toggleBlock( blockIndex, group, groupIndex, reference ); } }
              onKeyUp={ () => { context.toggleBlock( blockIndex, group, groupIndex, reference ); } }
              role="button"
              tabIndex={ 0 }
            >
              <Icon
                icon={ (
                  <svg>
                    { icon.paths && (
                      icon.paths.map( ( path, idx ) => ( <path key={ idx } d={ path } /> ) )
                    ) }
                    { icon.polygons && (
                      icon.polygons.map( ( polygon, idx ) => ( <polygon key={ idx } points={ `${polygon}` } /> ) )
                    ) }
                    { icon.rects && ( icon.rects.map( ( rect, idx ) => (
                      <rect
                        key={ idx }
                        x={ rect.x }
                        y={ rect.y }
                        width={ rect.width }
                        height={ rect.height }
                      />
                    ) ) ) }
                  </svg>
                ) }
              />
              <strong>{ reference }</strong>
            </div>
          );
        } }
      </Consumer>
    </div>
  );
};

BlockToggle.propTypes = {
  blockIndex: number,
  group: string,
  groupIndex: number,
  reference: string,
};

export default BlockToggle;
