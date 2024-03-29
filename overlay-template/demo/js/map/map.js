import { positionMap } from './mapUtils.js'

mapboxgl.accessToken = 'pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA'

const initMap = () => {
    const position = positionMap()

    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: position.center,
        zoom: position.zoom
    })
}

const makeRegionalExtentEls = map => {
    // create custom button elements
    const button = document.createElement('button')
    const icon = document.createElement('img')

    button.type = 'button'
    button.title = 'Zoom to regional extent'
    
    icon.id = 'regional-extent-img'
    icon.alt = 'DVRPC Alternative Logo'
    icon.src = 'https://www.dvrpc.org/img/banner/new/bug-favicon.png'

    button.classList.add('mapboxgl-ctrl-icon')
    button.classList.add('mapboxgl-ctrl-dvrpc')

    button.setAttribute('aria-label', 'Default DVRPC Extent')

    button.onclick = () => map.fitBounds([
        [-76.09405517578125, 39.49211914385648],[-74.32525634765625,40.614734298694216]
    ])

    button.appendChild(icon)

    return button
}

const makeControls = map => {
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: 'Zoom to location',
        bbox: [-76.09405517578125,39.49211914385648,-74.32525634765625,40.614734298694216],
        marker: false
    })

    const navigationControl = new mapboxgl.NavigationControl();
    const extentControl = makeRegionalExtentEls(map)

    // plug into mapbox fncs
    map.addControl(geocoder, 'top-right')
    
    navigationControl._extent = extentControl
    navigationControl._container.appendChild(extentControl)

    return navigationControl
}

const makeMap = () => {
    const map = initMap()
    const control = makeControls(map)

    map.addControl(control);

    return map
}

export default makeMap