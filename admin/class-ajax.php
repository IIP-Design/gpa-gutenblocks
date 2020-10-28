<?php
/**
 * Registers the Ajax class.
 *
 * @package LAB_Gutenblocks\Ajax
 */

namespace LAB_Gutenblocks;

/**
 * Saves changes to enabled blocks.
 *
 * @package LAB_Gutenblocks\Ajax
 * @since 0.0.1
 */
class Ajax {

  /**
   * Handles Ajax request to update which blocks are enabled.
   */
  public function save_enabled_blocks() {
    $is_nonce_set      = isset( $_POST['security'] );
    $is_verified_nonce = wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['security'] ) ), 'gpa_gut_save' );
    $is_referer_valid  = check_ajax_referer( 'gpa_gut_save', 'security' );

    if ( ! $is_nonce_set || ! $is_verified_nonce || ! $is_referer_valid ) {
      return;
    }

    $enabled_blocks = get_option( 'iip_gut_enabled_blocks' );

    if ( ! empty( $_POST['payload'] ) ) {
      $enabled_blocks = ( json_decode( sanitize_text_field( wp_unslash( $_POST['payload'] ) ) ) );
    }

    update_option( 'iip_gut_enabled_blocks', $enabled_blocks );
    wp_die();
  }
}
