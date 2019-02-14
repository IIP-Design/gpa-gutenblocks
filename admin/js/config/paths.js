const path = require( 'path' );
const fs = require( 'fs' );

const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  appDist: resolveApp( 'dist' ),
  appPackageJson: resolveApp( 'package.json' ),
  appPublic: resolveApp( 'public' ),
  blocksIndex: resolveApp( 'blocks/interactive.js' ),
  blocksSrc: resolveApp( 'blocks' ),
  embedsIndex: resolveApp( 'blocks/embeds.js' ),
  embedsSrc: resolveApp( 'blocks' ),
  interfaceIndex: resolveApp( 'admin-interface/index.js' ),
  interfaceSrc: resolveApp( 'admin-interface' ),
  dotenv: resolveApp( '.env' )
};
