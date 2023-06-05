# Webmap Templates
Use the templates in this repo to bootstrap custom webmapping projects using Mapboxgl JS, DVRPC's municipal boundaries tileset, and Webpack.

[View overlay-template example](https://dvrpc.github.io/map-templates/)

<br />

## Includes
- Two templates to bootstrap custom Mapboxgl JS webmaps centered on the DVRPC region
    - `/sidebar-template/` for maps that need data tables, charts or other context
    - `/overlay-template/` for simpler point-and-click maps
- Mapbox geocoder to zoom to address
- DVRPC regional extent control
- About modal to provide information about the project
    - Defaults to being closed, can be toggled to open by default
- Responsive design
- Google Analytics tracking script
- Webpack config to bundle dev and production code
    - Production bundle outputs to `/build/` folder
- Config functiosn for basic popup creation and form input handling