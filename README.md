# GPA Gutenblocks

This plugin contains a `gpa-gutenblocks.php`, which registers plugin and begins its execution. Additionally, there is an admin class (`admin/class--admin.php`) where all admin hooks are registered and the frontend class (`public/class-frontend.php`) where all public hooks are registered. The includes directory contains the main plugin class (`include/class-lab-gutenblocks.php`), which defines the core functionality of the plugin and the loader file (`include/class-loader.php`), which feeds the admin and public hooks in from their respective classes into the main class file.

The `admin` directory also includes everything necessary to build a React app located in the `js`. The entry point for this admin app is `src/index.js` and all code added to the admin app should reside in the `src` directory. The package also includes webpack to allow for running development server and bundling the admin code into a production build. To run the dev server navigate to the `admin/js` directory and run `npm run start`. This will run the server on localhost port 8080. To run a production build of the admin section run the command `npm run build` from the `admin/js` directory. This will create a production bundle that will be saved in the `dist` directory.

## Plugin Structure

```bash
├── gpa-gutenblocks.php
│
├── admin
│   ├── class-admin.php
│   ├── class-ajax.php # Handles communication between server and settings page
│   ├── blocks/ # Registers custom blocks and enqueues the relevant scripts/styles
│   └── js
│       ├── admin-interface/ # GUI for the plugin settings page
│       └── blocks/ # React to add custom blocks to the Gutenberg editor
│
├── config/ # Webpack configurations for production compilation
├── dist/ # Compiled plugin JS and CSS files
│
├── includes
│   ├── class-lab-gutenblocks.php # Manages the initiation of plugin hooks and filters
│   └── class-loader.php # Executes hooks/filters
│
└── public
    ├── class-frontend.php # Enqueues and localizes the frontend scripts/styles
    └── blocks/ # React for the frontend block display
```
