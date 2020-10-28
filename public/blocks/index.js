import App from './App';

const { React } = window;
const { render } = window.ReactDOM;

// Element name still prefixed with iip to maintain backwards compatibility.
const attachTo = document.getElementById( 'iip-gut-add-to-cal' );

if ( attachTo ) {
  render( <App />, attachTo );
}
