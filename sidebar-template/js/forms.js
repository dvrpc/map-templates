import secondaryMapLayers from './map/secondaryMapLayers.js'

/*
// Sample functions for basic form interactions

// @ELEMENTS: Set the "value" attribute on each form control (input, select, etc) to the id of the layer it affects.
<form id="toggle-form" class="sidebar-form">
    <input type="checkbox" value="layer-name">
</form>
*/

// handles: checkboxes, toggles, radio buttons
// functionality: toggles checked layer visibility
// returns: array of active layer ID's
const handleFormInputs = (inputs, map) => {
    let active = []

    inputs.forEach(input => {
        const layer = input.value
        const checked = input.checked
        const visibility = checked ? 'visible' : 'none'

        if(checked) active.push(layer)

        if(map.getLayer(layer)) {
            map.setLayoutProperty(layer, 'visibility', visibility)
        }
        else {
            // add layer on first pass
            if(checked) {
                const mapLayer = secondaryMapLayers[layer]
                map.addLayer(mapLayer, 'road-label')
            }
        }
    })

    return active
}

// handles: select
// functionality: toggle selected layer visibility
// returns: active layer ID
const handleFormSelect = (selects, map) => {
    let active = []

    selects.forEach(select => {
        const options = Array.from(select.children)

        options.forEach(option => {
            const layer = option.value
            const selected = option.selected
            const visibility = selected ? 'visible' : 'none'

            if(selected) active.push(layer)

            if(map.getLayer(layer)) {
                map.setLayoutProperty(layer, 'visibility', visibility)
            }
            else {
                // add layer on first pass
                if(selected) {
                    const mapLayer = secondaryMapLayers[layer]
                    map.addLayer(mapLayer, 'road-label')
                }
            }            
        })
    })

    return active
}

const handleForms = (type, toggles, map) => {
    switch(type) {
        case 'select':
            return handleFormSelect(toggles, map)
        default:
            return handleFormInputs(toggles, map)
    }
}

export default handleForms