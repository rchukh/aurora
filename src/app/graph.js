import cytoscape from 'cytoscape'
// Configuration
import aurStyle from './graph/aurStyle'
import aurLayout from './graph/aurLayout'
import aurElements from './graph/aurElements'
// Extensions
import aurEdgeHandles from './graph/extension/aurEdgeHandles'
import aurContextMenu from './graph/extension/aurContextMenu'
import aurAutopanOnDrag from './graph/extension/aurAutopanOnDrag'

// NOTE: This is a simple graph from Cytoscape documentation, to test-out the packaging
var graph = cytoscape({
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
  layout: aurLayout(cytoscape),
  style: aurStyle(cytoscape),
  elements: aurElements()
})

// Register Extensions
aurEdgeHandles(cytoscape, graph)
aurContextMenu(cytoscape, graph)
aurAutopanOnDrag(cytoscape, graph)
