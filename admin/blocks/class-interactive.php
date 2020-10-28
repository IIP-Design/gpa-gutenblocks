<?php
/**
 * Registers the Interactive class.
 *
 * @package LAB_Gutenblocks\Interactive
 */

namespace LAB_Gutenblocks;

/**
 * Register custom Gutenberg blocks for the Interactive team.
 *
 * @package LAB_Gutenblocks\Interactive
 */
class Interactive {

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
   * Registers all the custom Interactive Gutenberg blocks
   */
  public function register_interactive_blocks() {

    // Ensures that Gutenberg is active.
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'gpalab-gut-interactive-admin-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactive.min.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-element' ),
      $this->version,
      true
    );

    wp_register_style(
      'gpalab-gut-interactive-css',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactive.min.css',
      array(),
      $this->version
    );

    register_block_type(
      'iip-gut/interactive',
      array(
        'editor_style'  => 'gpalab-gut-interactive-css',
        'editor_script' => 'gpalab-gut-interactive-admin-js',
        'style'         => 'gpalab-gut-interactive-css',
      )
    );
  }

  /**
   * Registers custom meta data.
   */
  public function register_custom_meta() {
    register_meta(
      'post',
      'iip_gut_atc_event',
      array(
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
      )
    );
  }

  /**
   * Adds a custom category to the Gutenberg block listing.
   *
   * @param array  $categories  List of block categories.
   * @param object $post        WordPress post object.
   */
  public function register_custom_block_category( $categories, $post ) {
    $type = $post->post_type;

    if ( 'post' !== $type && 'page' !== $type ) {
      return $categories;
    }

    return array_merge(
      $categories,
      array(
        array(
          'slug'  => 'iip_custom_blocks',
          'title' => __( 'GPA/LAB Custom Blocks', 'gpalab-gutenblocks' ),
        ),
      )
    );
  }
}
