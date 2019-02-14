import App from './App';

const { React } = window;
const { render } = window.ReactDOM;

const attachTo = document.getElementById( 'iip-gut-add-to-cal' );

if ( attachTo ) {
  render(
    <App />, attachTo
  );
}
