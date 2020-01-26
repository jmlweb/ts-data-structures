class GraphNode<T> {
  public static create(key: any): GraphNode<any> {
    return new GraphNode(key);
  }

  public key: T;
  public neighbors: ReadonlyArray<GraphNode<T>> = [];
  constructor(key: T) {
    this.key = key;
  }

  public addNeighbor(node: GraphNode<T>): void {
    const { key } = node;
    const neighborsKeys = this.neighbors.map(x => x.key);
    if (!neighborsKeys.includes(key)) {
      this.neighbors = [...this.neighbors, node];
    }
  }
}

class Graph<T> {
  public static create(directed?: boolean): Graph<any> {
    return new Graph(directed);
  }

  private directed: boolean;
  private nodes: ReadonlyArray<GraphNode<T>> = [];
  private edges: ReadonlyArray<string> = [];

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  public addNode(key: T): void {
    this.nodes = [...this.nodes, GraphNode.create(key)];
  }

  public getNode(key: T): GraphNode<T> | undefined {
    return this.nodes.find(node => node.key === key);
  }

  public addEdge(key1: T, key2: T): void {
    const node1 = this.getNode(key1);
    const node2 = this.getNode(key2);

    if (node1 && node2) {
      node1.addNeighbor(node2);

      this.edges = [...this.edges, `${key1}-${key2}`];

      if (!this.directed) {
        node2.addNeighbor(node1);
      }
    }
  }

  public print(): string {
    return this.nodes
      .map(({ key, neighbors }) => {
        const parsedNeighbors = neighbors
          .map(neighbor => neighbor.key)
          .join(' ');
        return `${key} => ${parsedNeighbors}`;
      })
      .join('\n');
  }
}

export default Graph;
