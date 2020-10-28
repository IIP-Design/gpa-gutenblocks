# Change Log

##### All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/IIP-Design/gpa-gutenblocks/compare/v1.2.0...HEAD)

## [v1.2.0](https://github.com/IIP-Design/gpa-gutenblocks/compare/v1.1.2...v1.2.0) - 2020.10.28

**Added:**

- PHP linting with PHP Code Sniffer

**Changed:**

- Rename the plugin as "GPA Gutenblocks"
- Make default option in timezone dropdown from EST to UTC
- Update all timezone names to match the canonical name - provides better integration with third-party calendars
- Display offsets relative to UTC rather than GMT for added clarity
- Consolidate admin and frontend build tools at the project root
- Update namespace and text-domain to match organizational change from IIP to GPA
- Switched from Airbnb to GPA/LAB ESLint config
- Switch all .jsx extensions to .js

**Security:**

- Update JavaScript dependencies

## [v1.1.2](https://github.com/IIP-Design/gpa-gutenblocks/compare/v1.1.1...v1.1.2) - 2019.03.13

**Added:**

- Override multisite restrictions on uploading HTML to post content
- NPM script to automate plugin versioning

**Bug Fixed:**

- Pass in shadow and outline values to the iframe editor display

## [v1.1.1](https://github.com/IIP-Design/gpa-gutenblocks/compare/v1.1.0...v1.1.1) - 2019.02.21

**Added:**

- Keywords to all blocks to enable searching

**Bug Fixed:**

- Use proper file name when enqueueing front end scripts
- Shrink down video embed container to better fit small screens

## [v1.1.0](https://github.com/IIP-Design/gpa-gutenblocks/compare/v1.0.0...v1.1.0) - 2019.02.19

**Added:**

- 'IIP Gutenblocks' options page for plugin configurations
- The ability to toggle on/off default WordPress Gutenblocks
- A responsive iframe block to the embed section

**Changed:**

- Consolidated tooling in admin section and added build scripts to project root
- Make IIP Custom Block available on pages as well as posts

**Bug Fixed:**

- Remove block-editor CSS from front end CSS enqueueing

## [v1.0.0 (Initial Release)](https://github.com/IIP-Design/gpa-gutenblocks/releases/tag/v1.0.0) - 2019.02.11

**Added:**

- Three Gutenberg blocks, namely an add to calendar button, chatroll window, and countdown widget
- Custom block category called 'IIP Custom Blocks' to hold IIP-specific blocks
