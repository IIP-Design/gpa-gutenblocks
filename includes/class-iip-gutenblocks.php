<?php

class IIP_Gutenblocks {

  /**
   * The loader that's responsible for maintaining and registering all hooks that power the plugin.
   *
   * @since    0.0.1
   * @access   protected
   * @var      IIP_Gutenblocks_Loader    $loader    Maintains and registers all hooks for the plugin.
   */

  protected $loader;

  /**
   * The unique identifier and version of this plugin.
   *
   * @since    0.0.1
   * @access   protected
   */

  protected $plugin_name;
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
    $this->plugin_name = 'iip-gutenblocks';
    $this->version = '0.0.1';
    $this->load_dependencies();
    $this->define_admin_hooks();
    $this->define_public_hooks();
  }

  /**
   * Load the required dependencies for this plugin.
   *
   * Include the following files that make up the plugin:
   *
   * - IIP_Gutenblocks\Loader. Orchestrates the hooks of the plugin.
   * - IIP_Gutenblocks\Admin. Defines all hooks for the admin area.
   * - IIP_Gutenblocks\Frontend. Defines all hooks for the public side of the site.
   *
   * Create an instance of the loader which will be used to register the hooks with WordPress.
   *
   * @since    0.0.1
   * @access   private
   */

  private function load_dependencies() {
    // The class responsible for orchestrating the actions and filters of the core plugin.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-iip-gut-loader.php';

    // The classes responsible for orchestrating activation/deactivation of the plugin.
    // require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-iip-gut-activator.php';    
    
    // The class responsible for defining all actions that occur in the admin area.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-iip-gut-admin.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-iip-gut-ajax.php';

    // The classes responsible for defining all actions required by blocks.
    // require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-iip-gut-content-blocks.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-iip-gut-embeds.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-iip-gut-globals.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/blocks/class-iip-gut-interactive.php';

    // The class responsible for defining all actions that occur in the public-facing side of the site.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-iip-gut-public.php';
    
    // Loader
    $this->loader = new IIP_Gutenblocks\Loader();
  }

  private function define_activation_hooks() {
    // -------- Activation Hooks -------- //
    // $plugin_admin = new IIP_Gutenblocks\Activation( $this->get_plugin_name(), $this->get_version() );
  }
  
  // Register all of the hooks related to the admin area functionality of the plugin.
  private function define_admin_hooks() {
    // -------- Admin Hooks -------- //
    $plugin_admin = new IIP_Gutenblocks\Admin( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_admin_page' );
    $this->loader->add_action( 'admin_notices', $plugin_admin, 'enqueue_admin_page' );

    // -------- Admin Hooks -------- //
    $plugin_ajax = new IIP_Gutenblocks\Ajax( $this->get_plugin_name(), $this->get_version() );
    
    $this->loader->add_action( 'wp_ajax_iip_gut_save', $plugin_ajax, 'save_enabled_blocks' );
    
    // -------- Block Hooks -------- //
    // Embeds Blocks
    $plugin_embeds = new IIP_Gutenblocks\Embeds( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'init', $plugin_embeds, 'register_embed_blocks' );

    // Globals Blocks
    $plugin_globals = new IIP_Gutenblocks\Globals( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'enqueue_block_editor_assets', $plugin_globals, 'register_dequeue_blocks' );

    // Interactive Blocks
    $plugin_interactive = new IIP_Gutenblocks\Interactive( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'init', $plugin_interactive, 'register_interactive_blocks' );
    $this->loader->add_action( 'init', $plugin_interactive, 'register_custom_meta' );
    $this->loader->add_filter( 'block_categories', $plugin_interactive, 'register_custom_block_category', 10, 2 );
  }

  // Register all of the hooks related to the public-facing functionality
  private function define_public_hooks() {
    // -------- Frontend hooks -------- //
    $plugin_frontend = new IIP_Gutenblocks\Frontend( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'wp_enqueue_scripts', $plugin_frontend, 'enqueue_iip_gutenblocks_frontend' );
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
   * @return    IIP_Gutenblocks_Loader    Orchestrates the hooks of the plugin.
   */

  public function get_loader() {
    return $this->loader;
  }

  // Retrieve the name & version number of the plugin.
  public function get_plugin_name() {
    return $this->plugin_name;
  }

  public function get_version() {
    return $this->version;
  }
}
