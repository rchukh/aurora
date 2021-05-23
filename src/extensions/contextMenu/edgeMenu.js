import {Core} from 'cytoscape';
import React from "react";
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

/**
 * Registers edge context menu.
 * @param {Core} graph Cytoscape Graph instance
 */
export default function edgeMenu(graph) {
    graph.cxtmenu({
        menuRadius: 40,
        selector: 'edge',
        commands: [
            editEdgeAction(graph),
            removeEdgeAction(graph)
        ],
        indicatorSize: 16, // the size in pixels of the pointer to the active command
        minSpotlightRadius: 12, // the minimum radius in pixels of the spotlight
        maxSpotlightRadius: 28, // the maximum radius in pixels of the spotlight
        openMenuEvents: 'cxttapstart taphold' // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
    })
}


/**
 * @param {Core} graph Cytoscape Graph instance
 */
function editEdgeAction(graph) {
    const content = document.createElement('span')
    ReactDOM.render(<FontAwesomeIcon icon={faEdit}/>, content)

    return {
        content: content, // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function (ele) {
            // TODO: Add UI elements to fill in the label
            console.log(ele.id())
            graph
                .getElementById(ele.id())
                .data('label', 'edge')
        },
        enabled: true
    };
}

/**
 * @param {Core} graph Cytoscape Graph instance
 */
function removeEdgeAction(graph) {
    const content = document.createElement('span')
    ReactDOM.render(<FontAwesomeIcon icon={faTrash}/>, content)

    return {
        content: content,
        fillColor: 'rgba(255, 0, 0, 0.75)',
        select: function (ele) {
            // TODO: Add UI to confirm removal
            graph
                .getElementById(ele.id())
                .remove()
        },
        enabled: true
    };
}