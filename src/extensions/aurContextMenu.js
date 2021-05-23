import cxtmenu from 'cytoscape-cxtmenu'
import Cytoscape, {Core} from 'cytoscape';
import React from "react";
import nodeMenu from "./contextMenu/nodeMenu";
import edgeMenu from "./contextMenu/edgeMenu";
import canvasMenu from "./contextMenu/canvasMenu";

Cytoscape.use(cxtmenu)

/**
 * Registers cxtmenu extension.
 * @param {Core} graph Cytoscape Graph instance
 */
export default function aurContextMenu(graph) {
    nodeMenu(graph);
    edgeMenu(graph);
    canvasMenu(graph);
}
