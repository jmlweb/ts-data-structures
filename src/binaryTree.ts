import { VALID_KEY } from './typings';

class BinaryNode<T extends VALID_KEY> {
  public static create(key: any): BinaryNode<any> {
    return new BinaryNode(key);
  }
  public key: T;
  public left?: BinaryNode<T>;
  public right?: BinaryNode<T>;
  constructor(key: T) {
    this.key = key;
  }

  public addLeft(leftKey: string): BinaryNode<T> {
    this.left = BinaryNode.create(leftKey);
    return this.left;
  }

  public addRight(rightKey: string): BinaryNode<T> {
    this.right = BinaryNode.create(rightKey);
    return this.right;
  }
}

const TRAVERSALS = {
  IN_ORDER: (
    node: BinaryNode<any> | undefined,
    visitFn: (x: BinaryNode<any>) => void
  ) => {
    if (node !== undefined) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (
    node: BinaryNode<any> | undefined,
    visitFn: (x: BinaryNode<any>) => void
  ) => {
    if (node !== undefined) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (
    node: BinaryNode<any> | undefined,
    visitFn: (x: BinaryNode<any>) => void
  ) => {
    if (node !== undefined) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }
};

type TRAVERSAL_TYPE = keyof typeof TRAVERSALS;

class BinaryTree<T extends VALID_KEY> {
  public static create(key: any): BinaryTree<any> {
    return new BinaryTree(key);
  }

  public root: BinaryNode<T>;

  constructor(key: T) {
    this.root = BinaryNode.create(key);
  }

  public print(traversalType: TRAVERSAL_TYPE = 'IN_ORDER'): string {
    let result = '';

    const visit = (node: BinaryNode<T>): void => {
      result += result.length === 0 ? node.key : ` => ${node.key}`;
    };

    TRAVERSALS[traversalType](this.root, visit);

    return result;
  }
}

export default BinaryTree;
