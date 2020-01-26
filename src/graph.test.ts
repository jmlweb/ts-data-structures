import Graph from './graph';

describe('Directed Graph', () => {
  const directedGraph = Graph.create(true);

  it('graph output is empty', () => {
    expect(directedGraph.print()).toBe('');
  });

  it('is possible to add nodes', () => {
    directedGraph.addNode('Kyle');
    directedGraph.addNode('Anna');
    directedGraph.addNode('Krios');
    directedGraph.addNode('Tali');
  });

  it('gets works and returns undefined when calling a key not contained in the graph', () => {
    expect(directedGraph.getNode('Kyle')).toBeTruthy();
    expect(directedGraph.getNode('foo')).toBeUndefined();
  });

  it('is possible to add edges', () => {
    directedGraph.addEdge('Kyle', 'Anna');
    directedGraph.addEdge('Anna', 'Kyle');
    directedGraph.addEdge('Kyle', 'Krios');
    directedGraph.addEdge('Kyle', 'Tali');
    directedGraph.addEdge('Anna', 'Krios');
    directedGraph.addEdge('Anna', 'Tali');
    directedGraph.addEdge('Krios', 'Anna');
    directedGraph.addEdge('Tali', 'Kyle');
    expect(directedGraph.print()).toBe(
      'Kyle => Anna Krios Tali\nAnna => Kyle Krios Tali\nKrios => Anna\nTali => Kyle'
    );
  });
});

describe('Undirected Graph', () => {
  const undirectedGraph = Graph.create();

  it('graph output is empty', () => {
    expect(undirectedGraph.print()).toBe('');
  });

  it('is possible to add nodes', () => {
    undirectedGraph.addNode('Kyle');
    undirectedGraph.addNode('Anna');
    undirectedGraph.addNode('Krios');
    undirectedGraph.addNode('Tali');
  });

  it('gets works and returns undefined when calling a key not contained in the graph', () => {
    expect(undirectedGraph.getNode('Kyle')).toBeTruthy();
    expect(undirectedGraph.getNode('foo')).toBeUndefined();
  });

  it('is possible to add edges', () => {
    undirectedGraph.addEdge('Kyle', 'Anna');
    undirectedGraph.addEdge('Anna', 'Kyle');
    undirectedGraph.addEdge('Kyle', 'Krios');
    undirectedGraph.addEdge('Kyle', 'Tali');
    undirectedGraph.addEdge('Anna', 'Krios');
    undirectedGraph.addEdge('Anna', 'Tali');
    undirectedGraph.addEdge('Krios', 'Anna');
    undirectedGraph.addEdge('Tali', 'Kyle');
    expect(undirectedGraph.print()).toBe(
      'Kyle => Anna Krios Tali\nAnna => Kyle Krios Tali\nKrios => Kyle Anna\nTali => Kyle Anna'
    );
  });
});
