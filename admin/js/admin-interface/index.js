import AdminPage from './Components/AdminPage';

import './admin-page.scss';

const { wp } = window;
const { render } = wp.element;

const attachTo = document.getElementById( 'iip-gutenblocks-admin' );

if ( attachTo ) {
  render( <AdminPage />, attachTo );
}

if ( module.hot ) { module.hot.accept(); }
