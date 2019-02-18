import { func } from 'prop-types';

const { wp } = window;
const { Button } = wp.components;

const AdminBottomBar = ( { callback } ) => (
  <div className="iip-gut-floating-save">
    <Button
      isLarge
      isPrimary
      onClick={ callback }
    >
      Save Selections
    </Button>
  </div>
);

AdminBottomBar.propTypes = {
  callback: func
};

export default AdminBottomBar;
