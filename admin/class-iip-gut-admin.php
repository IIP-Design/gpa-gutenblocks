<?php

namespace IIP_Gutenblocks;

class Admin {

  public function add_admin_page() {
    add_options_page(
      __( 'IIP Gutenblocks', 'iip-gutenblocks' ),
      __( 'IIP Gutenblocks', 'iip-gutenblocks' ),
      'activate_plugins',
      'options-iip-gutenblocks',
      array( $this, 'load_admin_page') 
    );
  }

  function load_admin_page() {
    echo '<div id="iip-gutenblocks-admin"></div>';
  }

  public function enqueue_admin_page() {
    wp_enqueue_script(
      'gutenberg-admin-js',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/admin.min.js',
      array( 'wp-components', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/admin.min.js' )
    );

    wp_enqueue_style(
      'gutenberg-admin-css',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/admin.min.css',
      array( 'wp-components' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/admin.min.css' )
    );
  }
}