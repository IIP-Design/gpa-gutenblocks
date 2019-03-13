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
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/iip-gut-admin.min.js',
      array( 'wp-components', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/iip-gut-admin.min.js' )
    );

    wp_enqueue_style(
      'gutenberg-admin-css',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/iip-gut-admin.min.css',
      array( 'wp-components' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/iip-gut-admin.min.css' )
    );
  }

  public function enqueue_global_variables() {
    wp_enqueue_script(
      'gutenberg-globals-js',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/iip-gut-globals.js',
      array( 'wp-components', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/iip-gut-globals.js' )
    );

    $enabled_blocks = get_option( 'iip_gut_enabled_blocks' ) ? get_option( 'iip_gut_enabled_blocks' ) : '';

    wp_localize_script(
      'gutenberg-globals-js',
      'iipGutenblocks',
      array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'iipGutNonce' => wp_create_nonce( 'iip_gut_save' ),
        'enabledBlocks' => $enabled_blocks,
        'pluginUrl' => IIP_GUTENBLOCKS_URL
      )
    );
  }

  // Block data will not save in multisite unless user is a superadmin
  // This subverts that security measure by allowing unfiltered HTML
  // for administrators and editors
  // Not an optimal solution, should be revisited
  public function allow_unfiltered_html( $caps, $cap, $user_id ) {

    if ( !is_multisite() ) {
      return;
    }
    
    if ( 'unfiltered_html' === $cap && user_can( $user_id, 'editor' ) ) {
      
      $caps = array( 'unfiltered_html' );
    
    } elseif ( 'unfiltered_html' === $cap && user_can( $user_id, 'administrator' ) ) {
      
      $caps = array( 'unfiltered_html' );
    
    }
    
    return $caps;
  }
}