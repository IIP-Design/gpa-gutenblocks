const gpaGutToggleClasses = ( className, element ) => {
  if ( element.classList.contains( className ) ) {
    element.classList.remove( className );
  } else {
    element.classList.add( className );
  }
};

const gpaGutToggleDisplay = element => {
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

  gpaGutToggleClasses( 'reduced', topbar );
  gpaGutToggleClasses( 'minized', minimize );
  gpaGutToggleDisplay( iframe );
};

export const handleChatroll = () => {
  const chatroll = document.querySelector( '.iip-chatroll' );

  if ( chatroll ) {
    chatroll.addEventListener( 'click', toggleChatroll );
  }
};
