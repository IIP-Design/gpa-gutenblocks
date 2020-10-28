<?php
/**
 * Registers the Embeds class.
 *
 * @package LAB_Gutenblocks\Embeds
 */

namespace LAB_Gutenblocks;

/**
 * Adds custom Gutenberg blocks to the Embed block section.
 *
 * @package LAB_Gutenblocks\Embeds
 */
class Embeds {

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
      $this->version,
      true
    );

    wp_register_style(
      'gpalab-gut-embeds-css',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-embeds.min.css',
      array(),
      $this->version
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
