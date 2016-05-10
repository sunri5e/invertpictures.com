<?php
	function theme_register_nav_menu() {
		register_nav_menu( 'primary', 'Primary Menu' );
	}
	add_action( 'after_setup_theme', 'theme_register_nav_menu' );
?>