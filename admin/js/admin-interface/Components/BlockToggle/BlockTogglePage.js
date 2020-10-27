import AdminBottomBar from '../AdminBottomBar';
import BlockToggleGroup from './BlockToggleGroup';
import { Provider } from '../EnabledContext';

import { getBlockSettings } from '../../utils/isEnabled';
import { makeArrObj } from '../../utils/dataManipulation';


const { wp } = window;
const { Component } = wp.element;

class BlockTogglePage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      blockSettings: [],
      toggleBlock: this.toggleBlock, // eslint-disable-line react/no-unused-state
    };
  }

  componentDidMount() {
    const blockSettings = getBlockSettings();

    // eslint-disable-next-line
    this.setState( {
      blockSettings,
    } );
  }

  toggleBlock = ( blockIndex, group, groupIndex, reference ) => {
    const { blockSettings } = this.state;
    const item = blockSettings[groupIndex][group][blockIndex];
    const isEnabled = item[reference];
    const enabledState = ( isEnabled === 'enabled' ) ? 'disabled' : 'enabled';

    const updatedSettings = { };

    updatedSettings.blockSettings = blockSettings;
    updatedSettings.blockSettings[groupIndex][group][blockIndex][reference] = enabledState;

    this.setState( {
      blockSettings: updatedSettings.blockSettings,
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
                key={ groupName }
                blockGroup={ group[groupName] || [] }
                groupIndex={ groupIndex }
                groupName={ groupName || '' }
              />
            );
          } ) }
          <AdminBottomBar
            action="iip_gut_save"
            data={ makeArrObj( blockSettings ) }
            label="Save Selection"
          />
        </Provider>
      </div>
    );
  }
}

export default BlockTogglePage;
