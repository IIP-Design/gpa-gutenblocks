<?php

namespace IIP_Gutenblocks;

class Frontend {

  public function enqueue_iip_gutenblocks_frontend() {
    // Enqueue admin JavaScript bundle
    wp_enqueue_script(
      'iip-gutenblocks-frontend-js',
      IIP_GUTENBLOCKS_URL . 'public/blocks/dist/interactiveFront.min.js',
      array(),
      null,
      true
    );
  }

}