import autopanOnDrag from 'cytoscape-autopan-on-drag'

/**
 * Registers auto pan on drag extension.
 * @param {cytoscape} cytoscape Cytoscape library
 * @param {cytoscape.Core} graph Cytoscape Graph instance
 * @returns {autopanOnDrag} autopanOnDrag object
 */
export default function aurAutopanOnDrag (cytoscape, graph) {
  cytoscape.use(autopanOnDrag)

  let defaults = {
    enabled: true, // Whether the extension is enabled on register
    selector: 'node', // Which elements will be affected by this extension
    speed: 1 // Speed of panning when elements exceed canvas bounds
  }
  return graph.autopanOnDrag(defaults)
}
