const iipGutToggleClasses = ( className, element ) => {
  if ( element.classList.contains( className ) ) {
    element.classList.remove( className );
  } else {
    element.classList.add( className );
  }
};

const iipGutToggleDisplay = ( element ) => {
  if ( element.style.display === 'none' ) {
    element.style.display = 'inline';
  } else {
    element.style.display = 'none';
  }
};

const toggleChatroll = () => {
  const topbar = document.querySelector( '.iip-chatroll-topbar' );
  const minimize = document.querySelector( '.iip-chatroll-minimize' );
  const iframe = document.querySelector( '.iip-chatroll-iframe' );

  iipGutToggleClasses( 'reduced', topbar );
  iipGutToggleClasses( 'minized', minimize );
  iipGutToggleDisplay( iframe );
};

export const handleChatroll = () => {
  const iipChatroll = document.querySelector( '.iip-chatroll' );

  if ( iipChatroll ) {
    iipChatroll.addEventListener( 'click', toggleChatroll );
  }
};
