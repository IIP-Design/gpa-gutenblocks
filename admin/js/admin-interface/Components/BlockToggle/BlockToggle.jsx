import { array, string } from 'prop-types';

const { wp } = window;
const { Icon } = wp.components;

const BlockToggle = ( {
  paths, isEnabled, name, polygons, rects
} ) => (
  <div className="iip-gut-block-toggle">
    <div className={ `iip-gut-block-toggle-item ${isEnabled}` }>
      <Icon
        icon={ (
          <svg>
            { paths.map( path => ( <path d={ path } /> ) ) }
            { polygons && (
              polygons.map( polygon => ( <polygon points={ `${polygon}` } /> ) )
            ) }
            { rects && (
              rects.map( rect => ( <rect x={ rect.x } y={ rect.y } width={ rect.width } height={ rect.height } /> ) )
            ) }
          </svg>
        ) }
      />
      <strong>{ name }</strong>
    </div>
  </div>
);

BlockToggle.propTypes = {
  paths: array,
  isEnabled: string,
  name: string,
  polygons: array,
  rects: array
};

export default BlockToggle;
