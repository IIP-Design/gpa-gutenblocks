import { func, string } from 'prop-types';
import { Consumer } from './EnabledContext';
import { makeArrObj } from '../utils/saveEnabled';

const { wp } = window;
const { Button } = wp.components;

const AdminBottomBar = ( { action, callback, label } ) => (
  <div className="iip-gut-floating-save">
    <Consumer>
      { context => (
        <form action={ action } method="post">
          { /* <input type="hidden" id="iip_gut_nonce" name="iip_gut_nonce" value={ window.iipGutenblocks.iipGutNonce } /> */ }
          <Button
            isLarge
            isPrimary
            onClick={ () => callback( action, makeArrObj( context.blockSettings ) ) }
          >
            { label }
          </Button>
        </form>
      ) }
    </Consumer>
  </div>
);

AdminBottomBar.propTypes = {
  action: string,
  callback: func,
  label: string
};

export default AdminBottomBar;
