<?php

namespace IIP_Gutenblocks;

class Ajax {

  public function save_enabled_blocks() {
    $is_nonce_set = isset( $_POST[ 'security' ] );
    $is_verified_nonce = wp_verify_nonce( $_POST[ 'security' ], 'iip_gut_save' );
    $is_referer_valid = check_ajax_referer( 'iip_gut_save', 'security' );

    if ( !$is_nonce_set || !$is_verified_nonce || !$is_referer_valid ) {
      return;
    }

    $enabled_blocks = get_option( 'iip_gut_enabled_blocks' );

    if( !empty( $_POST['payload'] ) ) {
      $enabled_blocks = ( json_decode( stripslashes ( sanitize_text_field( $_POST['payload'] ) ) ) );
    }

    update_option( 'iip_gut_enabled_blocks', $enabled_blocks );
    wp_die();
  }
}