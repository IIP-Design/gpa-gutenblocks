<?php
/**
 * Registers the Admin class.
 *
 * @package LAB_Gutenblocks\Admin
 */

namespace LAB_Gutenblocks;

/**
 * Add plugin admin scripts and styles.
 *
 * @package LAB_Gutenblocks\Admin
 * @since 0.0.1
 */
class Admin {
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
   * Create plugin admin page.
   */
  public function add_admin_page() {
    add_options_page(
      __( 'GPA/LAB Gutenblocks', 'gpalab-gutenblocks' ),
      __( 'GPA/LAB  Gutenblocks', 'gpalab-gutenblocks' ),
      'activate_plugins',
      'options-iip-gutenblocks',
      array( $this, 'load_admin_page' )
    );
  }

  /**
   * Add root div for admin page.
   */
  public function load_admin_page() {
    echo '<div id="gpalab-gutenblocks-admin"></div>';
  }

  /**
   * Enqueue the admin page scripts and styles.
   */
  public function enqueue_admin_page() {
    wp_enqueue_script(
      'gutenberg-admin-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-admin.min.js',
      array( 'wp-components', 'wp-element' ),
      $this->version,
      true
    );

    wp_enqueue_style(
      'gutenberg-admin-css',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-admin.min.css',
      array( 'wp-components' ),
      $this->version
    );
  }

  /**
   * Enqueue global scripts and styles.
   */
  public function enqueue_global_variables() {
    wp_enqueue_script(
      'gutenberg-globals-js',
      IIP_GUTENBLOCKS_URL . 'dist/gpalab-gut-globals.js',
      array( 'wp-components', 'wp-element' ),
      $this->version,
      true
    );

    $enabled_blocks = get_option( 'iip_gut_enabled_blocks' ) ? get_option( 'iip_gut_enabled_blocks' ) : '';

    wp_localize_script(
      'gutenberg-globals-js',
      'iipGutenblocks',
      array(
        'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
        'iipGutNonce'   => wp_create_nonce( 'gpa_gut_save' ),
        'enabledBlocks' => $enabled_blocks,
        'pluginUrl'     => IIP_GUTENBLOCKS_URL,
      )
    );
  }

  /**
   * Block data will not save in multisite unless user is a super-admin.
   * This subverts that security measure by allowing unfiltered HTML for administrators and editors.
   * Not an optimal solution, should be revisited
   *
   * @param array  $caps      A list of WordPress user capabilities.
   * @param string $cap       User capability.
   * @param int    $user_id   A user id.
   */
  public function allow_unfiltered_html( $caps, $cap, $user_id ) {

    if ( ! is_multisite() ) {
      return;
    }

    if ( 'unfiltered_html' === $cap && user_can( $user_id, 'editor' ) ) {

      $caps = array( 'unfiltered_html' );

    } elseif ( 'unfiltered_html' === $cap && user_can( $user_id, 'administrator' ) ) {

      $caps = array( 'unfiltered_html' );

    }

    return $caps;
  }
}
