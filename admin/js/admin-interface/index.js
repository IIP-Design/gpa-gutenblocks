const { wp } = window;
const { render } = wp.element;

import AdminPage from './Components/AdminPage';

import './admin-page.scss';

const attachTo = document.getElementById( 'iip-gutenblocks-admin' );

if ( attachTo ) {
  render( <AdminPage />, attachTo );
}

if ( module.hot ) { module.hot.accept(); }
