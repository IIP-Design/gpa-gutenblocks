<?php

namespace IIP_Gutenblocks;

class Admin {

  // Registers all the custom Gutenberg blocks
  public function register_iip_gutenblocks() {

    // Ensures that Gutenberg is active
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'iip-interactive-gutenblocks-js',
      IIP_GUTENBLOCKS_URL . 'admin/blocks/dist/interactive.min.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    register_block_type( 'iip-gut/interactive', array(
      'editor_script' => 'iip-interactive-gutenblocks-js',
    ) );
  }

  public function register_custom_block_category( $categories, $post ) {
    if ( $post->post_type !== 'post' ) {
      return $categories;
    }

    return array_merge(
      $categories,
      array(
        array(
          'slug' => 'iip_custom_blocks',
          'title' => __( 'IIP Custom Blocks', 'iip-gutenblocks' )
        ),
      )
    );
  }
}