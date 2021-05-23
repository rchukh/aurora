import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

Cytoscape.use(dagre);

/**
 * Provides Cytoscape Layout.
 * @returns {*} Cytoscape Layout configuration
 */
export default function aurLayout() {
    return {
        // https://github.com/cytoscape/cytoscape.js-dagre
        // https://github.com/dagrejs/dagre/wiki/Home/c1892b0b72b081284ab4318cb3971b62c5b5b080
        name: 'dagre',
        rankDir: 'TD',
        edgeSep: '100'
    }
}