<?php
/**
 *
 * Plugin Name:       TwentySeven Theme Header Fix v3
 * Plugin URI:        http://isabbir.com/
 * Description:       This magic will fix the image issue with 2017 theme.
 * Version:           2.3.4
 * Author:            Sabbir Hasan
 * Author URI:        http://isabbir.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       header-fix
 */
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'PLUGIN_NAME_VERSION', '1.0.0' );

function codeian_header_fix()
{   
    wp_enqueue_script( '2017_header_fix', plugin_dir_url( __FILE__ ) . 'fix.js', array('jquery'), '1.0.0', false );
}
add_action('wp_enqueue_scripts', 'codeian_header_fix');
