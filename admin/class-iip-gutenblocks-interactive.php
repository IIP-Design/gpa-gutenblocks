<?php

namespace IIP_Gutenblocks;

class Interactive {

  // Registers all the custom Gutenberg blocks
  public function register_iip_gutenblocks() {

    // Ensures that Gutenberg is active
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'iip-gut-interactive-admin-js',
      IIP_GUTENBLOCKS_URL . 'admin/blocks/dist/interactive.min.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/blocks/dist/interactive.min.js' )
    );

    wp_register_script(
      'iip-gut-interactive-js',
      IIP_GUTENBLOCKS_URL . 'admin/blocks/dist/front.min.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/blocks/dist/front.min.js' )
    );

    wp_register_style(
      'iip-gut-interactive-css',
      IIP_GUTENBLOCKS_URL . 'admin/blocks/dist/interactive.min.css',
      array( 'wp-edit-blocks' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'admin/blocks/dist/interactive.min.css' )
    );

    wp_localize_script(
      'iip-gut-interactive-admin-js',
      'iipGutenblocks',
      array(
        'pluginUrl' => IIP_GUTENBLOCKS_URL
      )
    );
    
    register_block_type( 'iip-gut/interactive', array(
      'editor_style'  => 'iip-gut-interactive-css',
      'editor_script' => 'iip-gut-interactive-admin-js',
      'script' => 'iip-gut-interactive-js',
      'style'  => 'iip-gut-interactive-css',
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