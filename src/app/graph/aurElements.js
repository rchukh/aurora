// import AuroraElements from '../assets/data/elements.json'

/**
 * Provides Cytoscape Elements.
 * @returns {*} Cytoscape Elements
 */
export default function aurElements () {
  // return AuroraElements
  return {
    nodes: [
      { data: { id: 'a', label: 'a' }, classes: 'node-center' },
      { data: { id: 'b', label: 'b' } },
      { data: { id: 'c', label: 'c' } },
      { data: { id: 'd', label: 'd' } },
      { data: { id: 'e', label: 'e' } }
    ],

    edges: [
      { data: { id: 'a"e', weight: 1, source: 'a', target: 'e' } },
      { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
      { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
      { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
      { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
      { data: { id: 'cd', weight: 2, source: 'c', target: 'd', label: 'c -> d' } }
    ]
  }
}
