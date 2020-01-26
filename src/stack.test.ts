import Stack from './stack';

describe('Stack', () => {
  const stack = Stack.create();
  const firstValue = 'foo';
  const secondValue = 'bar';
  const thirdValue = 'baz';

  it('stack is valid', () => {
    expect(stack).toBeInstanceOf(Stack);
  });

  it('stack is empty at first', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('stack is not empty after adding one item', () => {
    stack.add(firstValue);
    expect(stack.isEmpty()).toBe(false);
  });

  it('queue length should be 3 after adding another 2 items', () => {
    stack.add(secondValue);
    stack.add(thirdValue);
    expect(stack.length).toBe(3);
  });

  it('queue should peek at second item when dequeueing', () => {
    stack.remove();
    expect(stack.peek()).toBe(secondValue);
  });
  it('queue should peek at first item when dequeueing', () => {
    stack.remove();
    expect(stack.peek()).toBe(firstValue);
    stack.remove();
  });

  it('queue should not fail when dequeueing over an empty queue', () => {
    expect(() => {
      stack.remove();
    }).not.toThrow();
  });

  it('peek should not fail over an empty queue', () => {
    expect(() => {
      stack.peek();
    }).not.toThrow();
  });
});
