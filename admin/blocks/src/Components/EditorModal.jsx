import {
  bool, element, func, string
} from 'prop-types';

const { wp } = window;
const { Button, Modal } = wp.components;
const { Fragment } = wp.element;

const EditorModal = ( {
  children, isOpen, onClick, title
} ) => (
  <Fragment>
    { isOpen && (
      <Modal
        onRequestClose={ () => onClick() }
        title={ title }
      >
        { children }
        <Button
          isPrimary
          onClick={ () => onClick() }
        >
          Save
        </Button>
      </Modal>
    ) }
  </Fragment>
);

EditorModal.propTypes = {
  children: element,
  isOpen: bool,
  onClick: func,
  title: string
};

export default EditorModal;
