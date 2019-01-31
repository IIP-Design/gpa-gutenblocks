# IIP Gutenblocks

This plugin contains a `iip-gutenblocks.php`, which registers plugin and begins its execution. Additionally, there is an admin class (`admin/class-iip-gutenblocks-admin.php`) where all admin hooks are registered and the frontend class (`public/class-iip-gutenblocks-public.php`) where all public hooks are registered. The includes directory contains the main plugin class (`include/class-iip-gutenblocks.php`), which defines the core functionality of the plugin and the loader file (`include/class-iip-gutenblocks-loader.php`), which feeds the admin and public hooks in from their respective classes into the main class file.

The `admin` directory also includes everything necessary to build a React app located in the `js`. The entry point for this admin app is `src/index.js` and all code added to the admin app should reside in the `src` directory. The package also includes webpack to allow for running development server and bundling the admin code into a production build. To run the dev server navigate to the `admin/js` directory and run `npm run start`. This will run the server on localhost port 8080. To run a production build of the admin section run the command `npm run build` from the `admin/js` directory. This will create a production bundle that will be saved in the `dist` directory.

## Plugin Structure

```bash
├── my-plugin.php
        ├── admin
        │   └── class-my-plugin-admin.php
        │   └── js
        │       ├── dist
        │       ├── index.html
        │       ├── package-lock.json
        │       ├── package.json
        │       ├── src
        │       │   ├── App.jsx
        │       │   ├── my-plugin-admin.css
        │       │   └── index.js
        │       ├── webpack.config.js
        │       └── webpack.config.prod.js
        ├── includes
        │   ├── class-my-plugin.php
        │   └── class-my-plugin-loader.php
        └── public
            └── class-my-plugin-public.php
```