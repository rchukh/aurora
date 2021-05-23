import {Core} from 'cytoscape';
import React from "react";
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons'

/**
 * Registers node context menu.
 * @param {Core} graph Cytoscape Graph instance
 */
export default function nodeMenu(graph) {
    graph.cxtmenu({
        menuRadius: 50, // the radius of the circular menu in pixels
        // NOTE: EdgeHandles conflics with context menu
        // Using just 'node' - context menu when hovered on the ghost red node
        // would work with ghost red node instead of main node
        selector: 'node[label]',
        commands: [ // an array of commands to list in the menu or a function that returns the array
            viewNodeAction(graph),
            editNodeAction(graph),
            removeNodeAction(graph)
        ],
        fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
        activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
        activePadding: 20, // additional size in pixels for the active command
        indicatorSize: 16, // the size in pixels of the pointer to the active command
        separatorWidth: 3, // the empty spacing in pixels between successive commands
        spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
        minSpotlightRadius: 18, // the minimum radius in pixels of the spotlight
        maxSpotlightRadius: 28, // the maximum radius in pixels of the spotlight
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
function viewNodeAction(graph) {
    const content = document.createElement('span')
    ReactDOM.render(<FontAwesomeIcon icon={faEye}/>, content)

    return {
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: content, // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function (ele) { // a function to execute when the command is selected
            console.log(ele.id()) // `ele` holds the reference to the active element
        },
        enabled: true // whether the command is selectable
    };
}

/**
 * @param {Core} graph Cytoscape Graph instance
 */
function editNodeAction(graph) {
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
                .data('label', 'node')
        },
        enabled: true
    };
}

/**
 * @param {Core} graph Cytoscape Graph instance
 */
function removeNodeAction(graph) {
    const content = document.createElement('span')
    ReactDOM.render(<FontAwesomeIcon icon={faTrash}/>, content)

    return {
        fillColor: 'rgba(255, 0, 0, 0.75)',
        content: content,
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function (ele) {
            // TODO: Add UI to confirm removal
            graph
                .getElementById(ele.id())
                .remove()
        },
        enabled: true
    };
}