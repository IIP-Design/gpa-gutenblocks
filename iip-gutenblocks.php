<?php
/**
 * Plugin Name: IIP Gutenblocks
 * Plugin URI: https://github.com/IIP-Design/iip-gutenblocks
 * Description: Plugin providing custom content blocks for the WordPress Gutenberg editor
 * Version: v1.1.2
 * Author: U.S. Department of State, Bureau of Global Public Affairs Digital Lab <gpa-lab@america.gov>
 * Text Domain: gpalab-gutenblocks
 * License: GNU General Public License v2.0
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 *
 * @package LAB_Gutenblocks
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
 	die;
}

// Define constants.
define( 'IIP_GUTENBLOCKS_DIR', plugin_dir_path( dirname( __FILE__ ) ) . 'iip-gutenblocks/' );
define( 'IIP_GUTENBLOCKS_URL', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-gutenblocks/' );

// Imports LAB_Gutenblocks class.
require plugin_dir_path( __FILE__ ) . 'includes/class-lab-gutenblocks.php';

/**
 * Begin execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 */
function run_lab_gutenblocks() {
  $plugin = new LAB_Gutenblocks();
  $plugin->run();
}

run_lab_gutenblocks();
