<?php

namespace LAB_Gutenblocks;

class Content_Blocks {

  // Registers all the custom Gutenberg blocks
  public function register_iip_gutenblocks() {

    // Ensures that Gutenberg is active
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    wp_register_script(
      'gpalab-gut-interactive-admin-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactive.min.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-element' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-interactive.min.js' ),
      true
    );

    wp_register_style(
      'gpalab-gut-interactive-css',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-interactive.min.css',
      array( 'wp-edit-blocks' ),
      filemtime( IIP_GUTENBLOCKS_DIR . 'dist/gpalab-gut-interactive.min.css' )
    );

    wp_localize_script(
      'gpalab-gut-interactive-admin-js',
      'iipGutenblocks',
      array(
        'pluginUrl' => IIP_GUTENBLOCKS_URL,
      )
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
          'title' => __( 'GPA/LAB Custom Blocks', 'iip-gutenblocks' ),
        ),
      )
    );
  }
}
