<?php

namespace IIP_Gutenblocks;

class Admin {

  // INSERT YOUR FRONTEND FUNCTIONS HERE
  // THE BELOW INCLUDED FUNCTIONS ADD AN ADMIN METABOX AND ENQUEQUE ADMIN SCRIPTS
  // FEEL FREE TO DELETE IF NOT NEEDED

  public function enqueue_iip_gutenblocks_admin() {
    wp_enqueue_script( 'iip-gutenblocks-admin-js', IIP_GUTENBLOCKS_URL . 'admin/js/dist/iip-gutenblocks-admin.min.js', array(), null, true );
  }

  public function add_metabox() {
    $post_type = array( 'post', 'page' );
    add_meta_box(
      'iip-gutenblocks-metabox',
      __( 'IIP Gutenblocks Metabox', 'iip-gutenblocks' ),
      array( $this, 'render_metabox' ),
      $post_type,
      'normal',
      'low'
    );
  }

  public function render_metabox() {
    echo '<div id="iip-gutenblocks-admin"></div>';
  }
}