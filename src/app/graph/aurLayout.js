import dagre from 'cytoscape-dagre'

/**
 * Provides Cytoscape Layout.
 * @param {cytoscape} cytoscape Cytoscape library
 * @returns {*} Cytoscape Layout
 */
export default function aurLayout (cytoscape) {
  cytoscape.use(dagre)
  return {
    // https://github.com/cytoscape/cytoscape.js-dagre
    // https://github.com/dagrejs/dagre/wiki/Home/c1892b0b72b081284ab4318cb3971b62c5b5b080
    name: 'dagre',
    rankDir: 'TD',
    edgeSep: '100'
  }
}
