import { object, string } from 'prop-types';
import { saveWithAjax } from '../utils/saveEnabled';

const { wp } = window;
const { Button } = wp.components;

const AdminBottomBar = ( { action, data, label } ) => (
  <div className="iip-gut-floating-save">
    <form action={ action } method="post">
      <Button
        isLarge
        isPrimary
        onClick={ () => saveWithAjax( action, data ) }
      >
        { label }
      </Button>
    </form>
  </div>
);

AdminBottomBar.propTypes = {
  action: string,
  data: object,
  label: string,
};

export default AdminBottomBar;
