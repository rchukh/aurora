import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre'
// import AuroraElements from './cytoscape/data/elements.json'

cytoscape.use(dagre)
// NOTE: This is a simple graph from Cytoscape documentation, to test-out the packaging
var cy = cytoscape({
  // Some randomly picked zoom settings that are working fine for test graph, in a test browser, on a test PC
  // TODO: Add UI elements for zoom?
  minZoom: 0.25,
  maxZoom: 1.5,
  //
  // The doc said not to change this, but the default is crazy for external mouse on laptop (touchpad behaves ok).
  // wheelSensitivity: 0.2,
  //
  // NOTE: Probably safer to just control it from UI
  // userZoomingEnabled: false,

  container: document.getElementById('cy'),

  layout: {
    // https://github.com/cytoscape/cytoscape.js-dagre
    // https://github.com/dagrejs/dagre/wiki/Home/c1892b0b72b081284ab4318cb3971b62c5b5b080
    name: 'dagre',
    rankDir: 'TD',
    edgeSep: '100'
    // name: 'breadthfirst',
    // directed: true,
    // roots: '#a',
    // padding: 10
  },

  style: cytoscape
    .stylesheet()
    .selector('node')
    .css({
      content: 'data(id)'
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
    }),

  // Graph Data
  // elements: AuroraElements
  elements: {
    nodes: [
      { data: { id: 'a' } },
      { data: { id: 'b' } },
      { data: { id: 'c' } },
      { data: { id: 'd' } },
      { data: { id: 'e' } }
    ],

    edges: [
      { data: { id: 'a"e', weight: 1, source: 'a', target: 'e' } },
      { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
      { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
      { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
      { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
      { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } }
    ]
  }
})

var bfs = cy.elements().bfs('#b', function () {}, true)

var i = 0
var highlightNextEle = function () {
  if (i < bfs.path.length) {
    bfs.path[i].addClass('highlighted')

    i++
    setTimeout(highlightNextEle, 1000)
  }
}

// kick off first highlight
highlightNextEle()
