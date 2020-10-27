import {
  bool, element, func, string,
} from 'prop-types';

const { wp } = window;
const { Button, Modal } = wp.components;

const EditorModal = ( {
  children, isOpen, onClick, title,
} ) => {
  if ( isOpen ) {
    return (
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
    );
  }

  return null;
};

EditorModal.propTypes = {
  children: element,
  isOpen: bool,
  onClick: func,
  title: string,
};

export default EditorModal;
