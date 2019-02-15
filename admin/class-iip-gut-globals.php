<?php

namespace IIP_Gutenblocks;

class Globals {

  // Removes unwanted Gutenberg blocks
  public function register_dequeue_blocks() {
    wp_register_script(
      'remove-gutenberg-blocks',
      IIP_GUTENBLOCKS_URL . 'admin/js/blocks/remove.js',
      array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/js/blocks/remove.js' )
    );
  }
}