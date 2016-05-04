<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

if ( file_exists( dirname( __FILE__ ) . '/wp-config-local.php' ) ) {
  include( dirname( __FILE__ ) . '/wp-config-local.php' );
}
else {
  // Настройки базы данных на веб-сервере
  define('DB_NAME', 'u925314599_inver');
  define('DB_USER', 'u925314599_inver');
  define('DB_PASSWORD', 'lY2xTwtFlG');
  define('DB_HOST', 'localhost');

  // Выключаем debug на веб-сервере
  define('WP_DEBUG', false);
}

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pVnB/za5Lh>bWb,X4`qI,F2I_8Z{E$*?eS2a=l22t(8DKXZr_?H{]Z)&z1n3vgt[');
define('SECURE_AUTH_KEY',  'OI(2~|[wzn x%z:MCDu]Rd7=F>%FE)Z/:{ )q4bU}L}o)Sh?%aI c~lY*_[<9n*Y');
define('LOGGED_IN_KEY',    'lzlT#+#AECybm2L-CK[CS ]</YLjq=(dHlA;*HDJ4>M,mrUVD1At4p6O;5;F;#(O');
define('NONCE_KEY',        'kRv,%CNPrw$D?+wedH726^iwZ@YVP3R*HajpZp2*(G!S_Nt,i1l0v7d(? E]tWfN');
define('AUTH_SALT',        'nOTHN%^GN%:2Y^)VzuK8MFq/-CE>o_%C6^|=-%lWm@T8hw2@(%6VKwBHM2^V:p0`');
define('SECURE_AUTH_SALT', 'XL`~0sVZ[-g6gpZBh0C[;c>6?D<qX,DnA`VAa;zkfvxz~<%}Zr4/hz^3[.VNtlS ');
define('LOGGED_IN_SALT',   ')!N**k5YId}`]UCGadskEfz(Jm)x#J(%] Zm5O d.wA<J!Z0%~C:;N]Pg%%{;,R,');
define('NONCE_SALT',       'uQT42 q2Z@2QDVOH)~,@FJKX{1h Q9#8m)J&dznTt,88>#,U1:[CJrJIv)zYn@G>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
// define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
