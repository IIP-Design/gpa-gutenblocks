<?php
/**
 * Registers the Globals class.
 *
 * @package LAB_Gutenblocks\Globals
 */

namespace LAB_Gutenblocks;

/**
 * Handles which blocks are available in the Gutenberg editor.
 *
 * @package LAB_Gutenblocks\Globals
 */
class Globals {

  /**
   * Initializes the class with the plugin name and version.
   *
   * @param string $plugin     The plugin name.
   * @param string $version    The plugin version number.
   */
  public function __construct( $plugin, $version ) {
    $this->plugin  = $plugin;
    $this->version = $version;
  }

  /**
   * Removes unwanted Gutenberg blocks
   */
  public function register_dequeue_blocks() {
    wp_enqueue_script(
      'remove-gutenberg-blocks',
      GPALAB_GUTENBLOCKS_URL . 'dist/gpalab-gut-blockSettings.min.js',
      array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
      $this->version,
      true
    );
  }
}
