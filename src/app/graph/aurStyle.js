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
      content: 'data(name)',
      width: 20,
      height: 20
    })
    .selector('edge')
    .css({
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      width: 4,
      'line-color': '#ddd',
      'target-arrow-color': '#ddd'
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
      'background-color': 'red',
      'width': 12,
      'height': 12,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12, // makes the handle easier to hit
      'border-opacity': 0
    })
    .selector('.eh-source')
    .css({
      'background-color': 'red'
    })
    .selector('.eh-handle')
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
