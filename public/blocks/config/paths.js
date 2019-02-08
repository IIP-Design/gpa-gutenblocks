const path = require( 'path' );
const fs = require( 'fs' );

const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  appDist: resolveApp( 'dist' ),
  appIndex: resolveApp( 'src/index.js' ),
  appPublic: resolveApp( 'public' ),
  appPackageJson: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' ),
  dotenv: resolveApp( '.env' )
};
