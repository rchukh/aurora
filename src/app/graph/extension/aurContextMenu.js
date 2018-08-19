import cxtmenu from 'cytoscape-cxtmenu'

/**
 *  @class AurMenu
 *  @type {Object}
 *  @property {cxtmenu} nodeMenu Node Cytoscape cxtmenu object (if set).
 *  @property {cxtmenu} edgeMenu Edge Cytoscape cxtmenu object (if set).
 *  @property {cxtmenu} canvasMenu Canvas Cytoscape cxtmenu object (if set).
 */
export class AurMenu {
  constructor (nodeMenu, edgeMenu, canvasMenu) {
    this.nodeMenu = nodeMenu
    this.edgeMenu = edgeMenu
    this.canvasMenu = canvasMenu
  }
}

/**
 * Registers cxtmenu extension.
 * @param {cytoscape} cytoscape Cytoscape library
 * @param {cytoscape.Core} graph Cytoscape Graph instance
 * @returns {aurMenu} Context Menus
 */
export default function aurContextMenu (cytoscape, graph) {
  cytoscape.use(cxtmenu)

  // the default values of each option are outlined below:
  let defaults = {
    menuRadius: 50, // the radius of the circular menu in pixels
    selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
    commands: [ // an array of commands to list in the menu or a function that returns the array
      {
        fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
        content: '<i class="fas fa-eye"></i>', // html/text content to be displayed in the menu
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function (ele) { // a function to execute when the command is selected
          console.log(ele.id()) // `ele` holds the reference to the active element
        },
        enabled: true // whether the command is selectable
      },
      {
        content: '<i class="fas fa-edit"></i>',
        contentStyle: {}, // css key:value pairs to set the command's css in js if you want
        select: function (ele) {
          // TODO: Add UI elements to fill in the label
          console.log(ele.id())
          graph
            .getElementById(ele.id())
            .data('label', 'node')
        },
        enabled: true
      }
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
  }
  let nodeMenu = graph.cxtmenu(defaults)

  let edgeDefaults = {
    menuRadius: 40,
    selector: 'edge',
    commands: [
      {
        content: '<i class="fas fa-edit"></i>',
        select: function (ele) {
          // TODO: Add UI elements to fill in the label
          console.log(ele.id())
          graph
            .getElementById(ele.id())
            .data('label', 'edge')
        },
        enabled: true
      }
    ],
    indicatorSize: 16, // the size in pixels of the pointer to the active command
    minSpotlightRadius: 12, // the minimum radius in pixels of the spotlight
    maxSpotlightRadius: 28, // the maximum radius in pixels of the spotlight
    openMenuEvents: 'cxttapstart taphold' // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
  }
  let edgeMenu = graph.cxtmenu(edgeDefaults)

  let canvasDefaults = {
    menuRadius: 50,
    selector: 'core',
    commands: [
      {
        fillColor: 'rgba(100, 100, 100, 0.75)',
        content: '<i class="fas fa-plus-square"></i>',
        select: function (ele, event) {
          var data = {
            group: 'nodes'
          }
          var pos = event.position
          graph.add({
            data: data,
            position: {
              x: pos.x,
              y: pos.y
            }
          })
        },
        enabled: true
      }
    ],
    fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
    activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
    activePadding: 20, // additional size in pixels for the active command
    indicatorSize: 12, // the size in pixels of the pointer to the active command
    separatorWidth: 3, // the empty spacing in pixels between successive commands
    spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
    minSpotlightRadius: 12, // the minimum radius in pixels of the spotlight
    maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
    openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
    itemColor: 'white', // the colour of text in the command's content
    itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
    zIndex: 9999, // the z-index of the ui div
    atMouse: false // draw menu at mouse position
  }
  let canvasMenu = graph.cxtmenu(canvasDefaults)

  return new AurMenu(
    nodeMenu, edgeMenu, canvasMenu
  )
}
