import React from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

import aurLayout from "./extensions/aurLayout";
import aurEdgeHandles from "./extensions/aurEdgeHandles";
import aurContextMenu from "./extensions/aurContextMenu";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CytoscapeComponent
                minZoom={0.25}
                maxZoom={2.0}
                layout={aurLayout()}
                cy={(cy) => {
                    this.cy = cy
                    aurEdgeHandles(this.cy)
                    aurContextMenu(this.cy)
                }}
                style={{width: '80vw', height: '80vh'}}
                stylesheet={[
                    {
                        selector: 'node',
                        style: {
                            'label': node => node.data('label') ? node.data('label') : '',
                            'width': 20,
                            'height': 20
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'label': 'data(label)',
                            'width': 4,
                            'line-color': '#ddd',
                            'curve-style': 'bezier',
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': '#ddd',
                            'edge-text-rotation': 'autorotate'
                        }
                    },
                    {
                        selector: '.highlighted',
                        style: {
                            'background-color': '#61bffc',
                            'line-color': '#61bffc',
                            'target-arrow-color': '#61bffc',
                            'transition-property': 'background-color, line-color, target-arrow-color',
                            'transition-duration': '0.5s'
                        }
                    },
                    {
                        selector: '.eh-handle',// EdgeHandles Styles
                        style: {
                            'label': '',
                            'background-color': 'red',
                            'width': 6,
                            'height': 6,
                            'shape': 'ellipse',
                            'overlay-opacity': 0,
                            'border-width': 12, // makes the handle easier to hit
                            'border-opacity': 0
                        }
                    },
                    {
                        selector: '.eh-source',
                        style: {

                            'border-width': 2,
                            'border-color': 'red'
                        }
                    },
                    {
                        selector: '.eh-target',
                        style: {

                            'border-width': 2,
                            'border-color': 'red'
                        }
                    },
                    {
                        selector: '.eh-preview, .eh-ghost-edg',
                        style: {
                            'background-color': 'red',
                            'line-color': 'red',
                            'target-arrow-color': 'red',
                            'source-arrow-color': 'red'
                        }
                    },
                    {
                        selector: '.node-center',
                        style: {
                            'text-halign': 'center',
                            'text-valign': 'center'
                        }
                    },
                ]}
                elements={CytoscapeComponent.normalizeElements({
                    nodes: [
                        {data: {id: 'a', label: 'a'}, classes: 'node-center'},
                        {data: {id: 'b', label: 'b'}},
                        {data: {id: 'c', label: 'c'}},
                        {data: {id: 'd', label: 'd'}},
                        {data: {id: 'e', label: 'e'}}
                    ],
                    edges: [
                        {data: {id: 'a"e', label: '', weight: 1, source: 'a', target: 'e'}},
                        {data: {id: 'ab', label: '', weight: 3, source: 'a', target: 'b'}},
                        {data: {id: 'be', label: '', weight: 4, source: 'b', target: 'e'}},
                        {data: {id: 'bc', label: '', weight: 5, source: 'b', target: 'c'}},
                        {data: {id: 'ce', label: '', weight: 6, source: 'c', target: 'e'}},
                        {data: {id: 'cd', label: 'c -> d', weight: 2, source: 'c', target: 'd'}}
                    ]
                })}
            />
        );
    }
}
