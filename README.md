# Webmap Templates
Use the templates in this repo to bootstrap custom webmapping projects. All templates follow the steps below to take you from download to deployment.

[View overlay-template example](https://dvrpc.github.io/map-templates/)

## Includes
- Config to sync layer, legend and form toggles
- Mapbox geocoder to zoom to address
- About modal to provide information about the project
- DVRPC bug map control to reset pitch and bearing and zoom to regional extent
- Google Analytics tracking script
- Responsive design
- Webpack config to output compiled project to `/build/`

## Getting Started
To familiarize yourself with the templates, spin up a local server ([live server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for vscode) and poke around the template directories. The `/demo/` path in each template directory contains a working demo to provide code examples for getting started.

### Set Up
- Initialize empty Git repo for project
- Copy template directory to project root
- fill out the `name` and `version` fields in `package.json`
    - (optional) fill out `description`, `author`, `repository: { url: ''}` and `keywords`
- `npm clean-install`
- commit and push
- Spin up a local server ([live server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for vscode) from root to launch project

### Add Layers & Toggles
- Add default map layers to `/js/map/mapLayers.js`
    - default map layers are visible after the initial page load
    - DVRPC County and municipal boundaries are included as defaults in the templates
- Add secondary map layers to `/js/map/secondaryMapLayers.js`
    - secondary map layers aren't visible until they are toggled on by a user
- Add legend information to `/js/legendConfig.js`
- Add toggles within the `<form id="toggle-form>` element in the sidebar.<strong> make sure to set toggle `value` attribute to its corresponding layer id, defined in either `mapLayers.js` or `secondaryMapLayers.js`</strong>

The rest of the content, actions and styles are up to you. Happy hacking. 

## Deployment
- make sure meta tags (created, description and keywords) and OG tags are filled out
- `npm run build`
    - if this errors out, try `npm clean-install` to wipe and reset installed packages then `npm run build` again
- in `/build/` folder:
    - delete `<script defer="defer" type="module" src="./js/index.js"></script>` from `index.html`
    - (optional) cache busting, change css file names and corresponding `<link>` paths in `index.html`
- copy files from `/build/` folder to deployment location.