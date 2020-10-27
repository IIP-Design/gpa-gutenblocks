import { element, string } from 'prop-types';

const Dropdown = ( { children, classes } ) => (
  <div className={ classes }>
    { children }
  </div>
);

Dropdown.propTypes = {
  children: element,
  classes: string,
};

export default Dropdown;
