import {Core} from 'cytoscape';
import React from "react";
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

/**
 * Registers canvas context menu.
 * @param {Core} graph Cytoscape Graph instance
 */
export default function canvasMenu(graph) {
    graph.cxtmenu({
        menuRadius: 50,
        selector: 'core',
        commands: [
            addNodeAction(graph)

        ],
        fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
        activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
        activePadding: 20, // additional size in pixels for the active command
        indicatorSize: 12, // the size in pixels of the pointer to the active command
        separatorWidth: 3, // the empty spacing in pixels between successive commands
        spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
        minSpotlightRadius: 12, // the minimum radius in pixels of the spotlight
        maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
        openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
        itemColor: 'white', // the colour of text in the command's content
        itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
        zIndex: 9999, // the z-index of the ui div
        atMouse: false // draw menu at mouse position
    })
}

/**
 * @param {Core} graph Cytoscape Graph instance
 */
function addNodeAction(graph) {
    const content = document.createElement('span')
    ReactDOM.render(<FontAwesomeIcon icon={faPlusSquare}/>, content)

    return {
        fillColor: 'rgba(100, 100, 100, 0.75)',
        content: content,
        select: function (ele, event) {
            const data = {
                label: '',
                group: 'nodes'
            }
            const pos = event.position
            graph.add({
                data: data,
                position: {
                    x: pos.x,
                    y: pos.y
                }
            })
        },
        enabled: true
    };
}
