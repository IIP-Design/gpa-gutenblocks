import BlockToggleGroup from './BlockToggleGroup';
import AdminBottomBar from '../AdminBottomBar';
import { Provider } from '../EnabledContext';

import { getBlockSettings } from '../../utils/isEnabled';
import { saveWithAjax } from '../../utils/saveEnabled';

const { wp } = window;
const { Component } = wp.element;

class BlockTogglePage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      blockSettings: [],
      toggleBlock: this.toggleBlock // eslint-disable-line react/no-unused-state
    };
  }

  componentDidMount() {
    const blockSettings = getBlockSettings();

    this.setState( {
      blockSettings
    } );
  }

  toggleBlock = ( blockIndex, group, groupIndex, reference ) => {
    const { blockSettings } = this.state;
    const item = blockSettings[groupIndex][group][blockIndex];
    const isEnabled = item[reference];
    const enabledState = ( isEnabled === 'enabled' ) ? 'disabled' : 'enabled';

    const updatedSettings = Object.assign( {} );
    updatedSettings.blockSettings = blockSettings;
    updatedSettings.blockSettings[groupIndex][group][blockIndex][reference] = enabledState;

    this.setState( {
      blockSettings: updatedSettings.blockSettings
    } );
  };

  render() {
    const { blockSettings } = this.state;
    return (
      <div className="iip-gut-block-toggle-page">
        <Provider value={ this.state }>
          { blockSettings.map( ( group, groupIndex ) => {
            const groupName = Object.keys( group )[0];
            return (
              <BlockToggleGroup
                blockGroup={ group[groupName] || [] }
                groupIndex={ groupIndex }
                groupName={ groupName || '' }
              />
            );
          } ) }
          <AdminBottomBar
            action="iip_gut_save"
            callback={ saveWithAjax }
            label="Save Selection"
          />
        </Provider>
      </div>
    );
  }
}

export default BlockTogglePage;
