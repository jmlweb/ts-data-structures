import BinaryTree from './binaryTree';

describe('BinaryTree', () => {
  const tree = BinaryTree.create('a');
  const b = tree.root.addLeft('b');
  const c = tree.root.addRight('c');
  const d = b.addLeft('d');
  b.addRight('e');
  c.addLeft('f');
  c.addRight('g');
  d.addLeft('h');
  d.addRight('i');
  it('works in default mode (IN_ORDER)', () => {
    expect(tree.print()).toBe('h => d => i => b => e => a => f => c => g');
  });

  it('works in PRE_ORDER mode', () => {
    expect(tree.print('PRE_ORDER')).toBe(
      'a => b => d => h => i => e => c => f => g'
    );
  });

  it('works in POST_ORDER mode', () => {
    expect(tree.print('POST_ORDER')).toBe(
      'h => i => d => e => b => f => g => c => a'
    );
  });
});
