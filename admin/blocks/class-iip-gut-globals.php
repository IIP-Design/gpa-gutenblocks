<?php

namespace LAB_Gutenblocks;

class Globals {

  /**
   * Removes unwanted Gutenberg blocks
   */
  public function register_dequeue_blocks() {
    wp_enqueue_script(
      'remove-gutenberg-blocks',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-blockSettings.min.js',
      array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-blockSettings.min.js' ),
      true
    );
  }
}
