const { wp } = window;
const { render } = wp.element;

import AdminPage from './AdminPage';

import './admin-page.scss';

render(
  <AdminPage />,
  document.getElementById( 'iip-gutenblocks-admin' )
);

if ( module.hot ) { module.hot.accept(); }
