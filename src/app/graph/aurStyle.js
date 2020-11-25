/**
 * Provides Cytoscape Stylesheet.
 * @param {cytoscape} cytoscape Cytoscape library
 * @returns {*} Cytoscape Style
 */
export default function aurStyle (cytoscape) {
  // TODO: Move this to separate file and drop dependency on cytoscape?
  return cytoscape
    .stylesheet()
    .selector('node')
    .css({
      'label': node => node.data('label') ? node.data('label') : '',
      'width': 20,
      'height': 20
    })
    .selector('edge')
    .css({
      'label': 'data(label)',
      'width': 4,
      'line-color': '#ddd',
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      'target-arrow-color': '#ddd',
      'edge-text-rotation': 'autorotate'
    })
    .selector('.highlighted')
    .css({
      'background-color': '#61bffc',
      'line-color': '#61bffc',
      'target-arrow-color': '#61bffc',
      'transition-property': 'background-color, line-color, target-arrow-color',
      'transition-duration': '0.5s'
    })
    .selector('.eh-handle') // EdgeHandles Styles
    .css({
      'label': '',
      'background-color': 'red',
      'width': 6,
      'height': 6,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12, // makes the handle easier to hit
      'border-opacity': 0
    })
    .selector('.eh-source')
    .css({
      'border-width': 2,
      'border-color': 'red'
    })
    .selector('.eh-target')
    .css({
      'border-width': 2,
      'border-color': 'red'
    })
    .selector('.eh-preview, .eh-ghost-edg')
    .css({
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red'
    })
    .selector('.node-center')
    .css({
      'text-halign': 'center',
      'text-valign': 'center'
    })
}
