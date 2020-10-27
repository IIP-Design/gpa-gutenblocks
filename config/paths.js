const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the plugin
const pluginDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the plugin root
const resolvePlugin = relativePath => path.resolve( pluginDirectory, relativePath );

module.exports = {
  dist: resolvePlugin( 'dist' ),
  packageJson: resolvePlugin( 'package.json' ),
  adminSrc: resolvePlugin( 'admin/js/blocks' ),
  interfaceSrc: resolvePlugin( 'admin/js/admin-interface' ),
  publicSrc: resolvePlugin( 'public/blocks' ),
};
