// functions to create and configure popups
const makePopup = () => new mapboxgl.Popup()

const addPopup = (map, lnglat, html, popup) => {
    popup
    .setLngLat(lnglat)
    .setHTML(html)
    .addTo(map)
}


// add popup HTML functions here

export { makePopup, addPopup }