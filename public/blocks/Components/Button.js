import { element, func, string } from 'prop-types';

const Button = ( { children, classes, onClick } ) => (
  <button
    className={ classes }
    onClick={ onClick }
    type="button"
  >
    { children }
  </button>
);

Button.propTypes = {
  children: element,
  classes: string,
  onClick: func,
};

export default Button;
