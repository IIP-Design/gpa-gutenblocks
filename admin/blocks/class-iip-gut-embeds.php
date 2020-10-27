<?php

namespace LAB_Gutenblocks;

class Embeds {

  /**
   * Registers all the custom Gutenberg blocks.
   */
  public function register_embed_blocks() {

    // Ensures that Gutenberg is active.
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'gpalab-gut-embeds-admin-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-embeds.min.js',
      array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-i18n' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-embeds.min.js' ),
      true
    );

    wp_register_style(
      'gpalab-gut-embeds-css',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-embeds.min.css',
      array(),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-embeds.min.css' )
    );

    register_block_type(
      'iip-gut/embeds',
      array(
        'editor_script' => 'gpalab-gut-embeds-admin-js',
        'style'         => 'gpalab-gut-embeds-css',
      )
    );
  }
}
