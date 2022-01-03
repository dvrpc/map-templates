# Webmap Templates
Use the templates in this repo to bootstrap custom webmapping projects. All templates follow the steps below to take you from download to deployment. 

## Includes
- Config for forms, legends and layers to easily add map sources, layers, layer toggles and legend info
- Mapbox geocoder to search + zoom to
- About modal to provide additional information about the app
- DVRPC icon map overlay to easily re-orient view to the DVRPC region
- webpack config that outputs compiled project to `/build/`
- Responsive design

## Getting Started
- Initialize empty Git repo for project
- Copy template directory to project root
- fill out the `name`, `description`, `author` and `repository: { url: ''}` fields in `package.json`. Optionally fill out `keywords`
- `npm clean-install`
- commit and push
- Spin up a local server ([live server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for vscode) from root to launch project
- Add default map layers to `/js/map/mapLayers.js`
    - default map layers are visible after the initial page load. DVRPC County and municipal boundaries are included with the template. 
- Add secondary map layers to `/js/map/secondaryMapLayers.js`
    - secondary map layers aren't visible until they are toggled on by a user
- Add legend information to `/js/legendConfig.js`
- Add toggles within the `<form id="toggle-form>` element in the sidebar.<strong> make sure to set toggle `value` attribute to its respective layer id, defined in either `mapLayers.js` or `secondaryMapLayers.js`</strong>
- The rest of the content, actions and styles are up to you. Happy hacking. 

## Deployment
- `npm run build`
    - if this errors out, try `npm clean-install` to wipe and reset installed packages then `npm run build` again
- in `/build/` folder:
    - delete `<script defer="defer" type="module" src="./js/index.js"></script>` from `index.html`
    - (optional) cache busting, change css file names and corresponding `<link>` paths in `index.html`
- copy files from `/build/` folder to deployment location.