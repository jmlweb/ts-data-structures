import { VALID_KEY } from './typings';

class TreeNode<T extends VALID_KEY> {
  public static create(key: any): TreeNode<any> {
    return new TreeNode(key);
  }

  public key: T;
  public children: ReadonlyArray<TreeNode<T>> = [];

  constructor(key: T) {
    this.key = key;
  }

  public addChild(childKey: T): TreeNode<T> {
    const childNode = TreeNode.create(childKey);
    this.children = [...this.children, childNode];
    return childNode;
  }
}

class Tree<T extends VALID_KEY> {
  public static create(key: any): Tree<any> {
    return new Tree(key);
  }

  public root: TreeNode<T>;

  constructor(key: T) {
    this.root = TreeNode.create(key);
  }

  public print(): string {
    let result = '';

    function traverse(
      node: TreeNode<T>,
      visitFn: (x: TreeNode<T>, y: number) => void,
      depth: number
    ): void {
      visitFn(node, depth);

      if (node.children.length) {
        node.children.forEach(child => {
          traverse(child, visitFn, depth + 1);
        });
      }
    }

    function addKeyToResult(node: TreeNode<T>, depth: number): void {
      result +=
        result.length === 0
          ? node.key
          : `\n${' '.repeat(depth * 2)}${node.key}`;
    }

    traverse(this.root, addKeyToResult, 1);

    return result;
  }
}

export default Tree;
