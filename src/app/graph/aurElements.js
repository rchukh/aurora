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
      { data: { id: 'a"e', label: '', weight: 1, source: 'a', target: 'e' } },
      { data: { id: 'ab', label: '', weight: 3, source: 'a', target: 'b' } },
      { data: { id: 'be', label: '', weight: 4, source: 'b', target: 'e' } },
      { data: { id: 'bc', label: '', weight: 5, source: 'b', target: 'c' } },
      { data: { id: 'ce', label: '', weight: 6, source: 'c', target: 'e' } },
      { data: { id: 'cd', label: 'c -> d', weight: 2, source: 'c', target: 'd' } }
    ]
  }
}
