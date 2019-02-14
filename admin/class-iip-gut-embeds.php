<?php

namespace IIP_Gutenblocks;

class Embeds {

  // Registers all the custom Gutenberg blocks
  public function register_embed_blocks() {

    // Ensures that Gutenberg is active
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'iip-gut-embeds-admin-js',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/embeds.min.js',
      array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-i18n' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/embeds.min.js' )
    );

    wp_register_style(
      'iip-gut-embeds-css',
      IIP_GUTENBLOCKS_URL . 'admin/js/dist/embeds.min.css',
      array(),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/dist/embeds.min.css' )
    );
    
    
    register_block_type( 'iip-gut/embeds', array(
      'editor_script' => 'iip-gut-embeds-admin-js',
      'style'  => 'iip-gut-embeds-css'
    ) );
  }
}