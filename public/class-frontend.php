<?php
/**
 * Registers the Frontend class.
 *
 * @package LAB_Gutenblocks\Frontend
 */

namespace LAB_Gutenblocks;

/**
 * Enqueue frontend scripts and styles.
 *
 * @package LAB_Gutenblocks\Frontend
 */
class Frontend {

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
   * Register .
   */
  public function enqueue_gutenblocks_frontend() {
    global $post;

    wp_enqueue_script(
      'gpalab-gutenblocks-frontend-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactiveFront.min.js',
      array( 'wp-element' ),
      $this->version,
      true
    );

    wp_enqueue_script(
      'gpalab-gut-interactive-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-front.min.js',
      array(),
      $this->version,
      true
    );

    $add_to_cal = get_post_meta( $post->ID, 'iip_gut_atc_event', true );
    $decoded    = json_decode( $add_to_cal, true );

    wp_localize_script(
      'gpalab-gutenblocks-frontend-js',
      'iipGutenblocks',
      array(
        'addToCal' => $decoded,
      )
    );
  }

}
