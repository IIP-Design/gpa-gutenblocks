<?php

/**
* Plugin Name: IIP Gutenblocks
* Plugin URI: https://github.com/IIP-Design/iip-gutenblocks
* Description: Plugin providing custom content blocks for the WordPress Gutenberg editor
* Version: 0.0.1
* Author: Marek Rewers, U.S. Department of State, IIP Office of Design <designdevops@america.gov>
* Text Domain: iip-gutenblocks
* License: GNU General Public License v2.0
* License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
 	die;
}

// Define constants
define( 'IIP_GUTENBLOCKS_DIR', plugin_dir_path( dirname( __FILE__ ) ) . 'iip-gutenblocks/' );
define( 'IIP_GUTENBLOCKS_URL', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-gutenblocks/' );

// Imports IIP_Gutenblocks class
require plugin_dir_path( __FILE__ ) . 'includes/class-iip-gutenblocks.php';

/* Begin execution of the plugin.
*
* Since everything within the plugin is registered via hooks,
* then kicking off the plugin from this point in the file does
* not affect the page life cycle.
*
*/

function run_iip_gutenblocks() {
  $plugin = new IIP_Gutenblocks();
  $plugin->run();
}
run_iip_gutenblocks();