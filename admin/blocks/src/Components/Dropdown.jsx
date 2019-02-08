import { element } from 'prop-types';

const Dropdown = ( { children } ) => (
  <div>
    { children }
  </div>
);

Dropdown.propTypes = {
  children: element
};

export default Dropdown;
