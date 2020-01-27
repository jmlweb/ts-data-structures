class BinaryNode {
  public static create(key: string): BinaryNode {
    return new BinaryNode(key);
  }
  public key: string;
  public left?: BinaryNode;
  public right?: BinaryNode;
  constructor(key: string) {
    this.key = key;
  }

  public addLeft(leftKey: string): BinaryNode {
    this.left = BinaryNode.create(leftKey);
    return this.left;
  }

  public addRight(rightKey: string): BinaryNode {
    this.right = BinaryNode.create(rightKey);
    return this.right;
  }
}

const TRAVERSALS = {
  IN_ORDER: (
    node: BinaryNode | undefined,
    visitFn: (x: BinaryNode) => void
  ) => {
    if (node !== undefined) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (
    node: BinaryNode | undefined,
    visitFn: (x: BinaryNode) => void
  ) => {
    if (node !== undefined) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (
    node: BinaryNode | undefined,
    visitFn: (x: BinaryNode) => void
  ) => {
    if (node !== undefined) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }
};

// type TRAVERSAL_TYPE = 'IN_ORDER' | 'PRE_ORDER' | 'POST_ORDER';
type TRAVERSAL_TYPE = keyof typeof TRAVERSALS;

class BinaryTree {
  public static create(key: string): BinaryTree {
    return new BinaryTree(key);
  }

  public root: BinaryNode;

  constructor(key: string) {
    this.root = BinaryNode.create(key);
  }

  public print(traversalType: TRAVERSAL_TYPE = 'IN_ORDER'): string {
    let result = '';

    const visit = (node: BinaryNode): void => {
      result += result.length === 0 ? node.key : ` => ${node.key}`;
    };

    TRAVERSALS[traversalType](this.root, visit);

    return result;
  }
}

export default BinaryTree;
