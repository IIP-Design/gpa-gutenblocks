<?php
/**
 * Registers the Frontend class.
 *
 * @package LAB_Gutenblocks\Frontend
 */
namespace LAB_Gutenblocks;

class Frontend {

  public function enqueue_iip_gutenblocks_frontend() {
    global $post;

    wp_enqueue_script(
      'gpalab-gutenblocks-frontend-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactiveFront.min.js',
      array( 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-interactiveFront.min.js' ),
      true
    );

    wp_enqueue_script(
      'gpalab-gut-interactive-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-front.min.js',
      array(),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-front.min.js' ),
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
