<?php

namespace IIP_Gutenblocks;

class Frontend {

  public function enqueue_iip_gutenblocks_frontend() {
    global $post;
    
    // Enqueue admin JavaScript bundle
    wp_enqueue_script(
      'iip-gutenblocks-frontend-js',
      IIP_GUTENBLOCKS_URL . 'public/blocks/dist/interactiveFront.min.js',
      array( 'wp-element' ),
      null,
      true
    );

    wp_enqueue_script(
      'iip-gut-interactive-js',
      IIP_GUTENBLOCKS_URL . 'admin/blocks/dist/front.min.js',
      array(),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/blocks/dist/front.min.js' )
    );

    $add_to_cal = get_post_meta( $post->ID, 'iip_gut_atc_event', true );
    $decoded = json_decode( $add_to_cal, true );
    
    wp_localize_script(
      'iip-gutenblocks-frontend-js',
      'iipGutenblocks',
      array(
        'addToCal' => $decoded
      )
    );
  }

}