<?php
/**
 * Registers the LAB_Gutenblocks class.
 *
 * @package LAB_Gutenblocks
 * @since 0.0.1
 */

/**
 * Register all hooks and filters to be run by the plugin.
 *
 * @package LAB_Gutenblocks
 */
class LAB_Gutenblocks {

  /**
   * The loader that's responsible for maintaining and registering all hooks that power the plugin.
   *
   * @var LAB_Gutenblocks_Loader $loader    Maintains and registers all hooks for the plugin.
   *
   * @since 0.0.1
   * @access protected
   */
  protected $loader;

  /**
   * The unique identifier for this plugin.
   *
   * @var $plugin_name
   *
   * @since 0.0.1
   * @access protected
   */
  protected $plugin_name;

  /**
   * The version of this plugin.
   *
   * @var $version
   *
   * @since 0.0.1
   * @access protected
   */
  protected $version;

  /**
   * Define the core functionality of the plugin.
   *
   * Set the plugin name and the plugin version that can be used throughout the plugin.
   * Load the dependencies and set the hooks for the admin area and
   * the public-facing side of the site.
   *
   * @since    0.0.1
   */
  public function __construct() {
    $this->plugin_name = 'GPA Lab Gutenblocks';
    $this->version     = 'v1.2.0';
    $this->load_dependencies();
    $this->define_admin_hooks();
    $this->define_public_hooks();
  }

  /**
   * Load the required dependencies for this plugin.
   *
   * Include the following files that make up the plugin:
   *
   * - LAB_Gutenblocks\Loader. Orchestrates the hooks of the plugin.
   * - LAB_Gutenblocks\Admin. Defines all hooks for the admin area.
   * - LAB_Gutenblocks\Ajax. Defines all hooks for the Ajax requests.
   * - LAB_Gutenblocks\Embeds. Defines all hooks for the custom Embed Gutenberg blocks
   * - LAB_Gutenblocks\Globals. Manages which blocks are available in the Gutenberg editor.
   * - LAB_Gutenblocks\Interactive. Defines all hooks for custom Interactive Gutenberg blocks.
   * - LAB_Gutenblocks\Frontend. Defines all hooks for the public side of the site.
   *
   * Create an instance of the loader which will be used to register the hooks with WordPress.
   *
   * @since 0.0.1
   * @access private
   */
  private function load_dependencies() {
    // The class responsible for orchestrating the actions and filters of the core plugin.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-loader.php';

    // The class responsible for defining all actions that occur in the admin area.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-admin.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-ajax.php';

    // The classes responsible for defining all actions required by blocks.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-embeds.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-globals.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-interactive.php';

    // The class responsible for defining all actions that occur in the public-facing side of the site.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-frontend.php';

    // Loader.
    $this->loader = new LAB_Gutenblocks\Loader();
  }

  /**
   * Register all of the hooks related to the admin area functionality of the plugin.
   */
  private function define_admin_hooks() {
    $plugin_admin   = new LAB_Gutenblocks\Admin( $this->get_plugin_name(), $this->get_version() );
    $plugin_ajax    = new LAB_Gutenblocks\Ajax( $this->get_plugin_name(), $this->get_version() );
    $plugin_embeds  = new LAB_Gutenblocks\Embeds( $this->get_plugin_name(), $this->get_version() );
    $plugin_globals = new LAB_Gutenblocks\Globals( $this->get_plugin_name(), $this->get_version() );
    $plugin_inter   = new LAB_Gutenblocks\Interactive( $this->get_plugin_name(), $this->get_version() );

    // Admin Hooks.
    $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_admin_page' );
    $this->loader->add_action( 'in_admin_header', $plugin_admin, 'enqueue_admin_page' );
    $this->loader->add_action( 'init', $plugin_admin, 'enqueue_global_variables' );
    $this->loader->add_action( 'map_meta_cap', $plugin_admin, 'allow_unfiltered_html', 1, 3 );

    // AJAX Hooks.
    $this->loader->add_action( 'wp_ajax_gpa_gut_save', $plugin_ajax, 'save_enabled_blocks' );

    // Embeds Blocks.
    $this->loader->add_action( 'init', $plugin_embeds, 'register_embed_blocks' );

    // Globals Blocks.
    $this->loader->add_action( 'enqueue_block_assets', $plugin_globals, 'register_dequeue_blocks' );

    // Interactive Blocks.
    $this->loader->add_action( 'init', $plugin_inter, 'register_interactive_blocks' );
    $this->loader->add_action( 'init', $plugin_inter, 'register_custom_meta' );
    $this->loader->add_filter( 'block_categories', $plugin_inter, 'register_custom_block_category', 10, 2 );
  }

  /**
   * Register all of the hooks related to the public-facing functionality
   */
  private function define_public_hooks() {
    $plugin_front = new LAB_Gutenblocks\Frontend( $this->get_plugin_name(), $this->get_version() );

    // Frontend hooks.
    $this->loader->add_action( 'wp_enqueue_scripts', $plugin_front, 'enqueue_gutenblocks_frontend' );
  }

  /**
   * Run the loader to execute all of the hooks with WordPress.
   *
   * @since    0.0.1
   */
  public function run() {
    $this->loader->run();
  }

  /**
   * The reference to the class that orchestrates the hooks with the plugin.
   *
   * @since     0.0.1
   * @return    LAB_Gutenblocks_Loader    Orchestrates the hooks of the plugin.
   */
  public function get_loader() {
    return $this->loader;
  }

  /**
   * Retrieve the name of the plugin.
   */
  public function get_plugin_name() {
    return $this->plugin_name;
  }

  /**
   * Retrieve the version number of the plugin.
   */
  public function get_version() {
    return $this->version;
  }
}
