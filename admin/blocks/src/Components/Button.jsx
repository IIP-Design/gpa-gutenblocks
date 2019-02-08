import { element, func } from 'prop-types';

const Button = ( { children, onClick } ) => (
  <button
    onClick={ onClick }
    type="button"
  >
    { children }
  </button>
);

Button.propTypes = {
  children: element,
  onClick: func
};

export default Button;
