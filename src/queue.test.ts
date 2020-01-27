import Queue from './queue';

describe('Queue', () => {
  const queue = Queue.create();
  const firstValue = 'foo';
  const secondValue = 'bar';
  const thirdValue = 'baz';

  it('queue is valid', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  it('queue is empty at first', () => {
    expect(queue.isEmpty).toBe(true);
  });

  it('queue is not empty after adding one item', () => {
    queue.add(firstValue);
    expect(queue.isEmpty).toBe(false);
  });

  it('queue length should be 3 after adding another 2 items', () => {
    queue.add(secondValue);
    queue.add(thirdValue);
    expect(queue.length).toBe(3);
  });

  it('queue should peek at second item when dequeueing', () => {
    queue.remove();
    expect(queue.peek).toBe(secondValue);
  });
  it('queue should peek at third item when dequeueing', () => {
    queue.remove();
    expect(queue.peek).toBe(thirdValue);
  });

  it('queue should not fail when dequeueing over an empty queue', () => {
    expect(() => {
      queue.remove();
    }).not.toThrow();
  });

  it('peek should not fail over an empty queue', () => {
    expect(() => {
      /* tslint:disable-next-line no-unused-expression*/
      queue.peek;
    }).not.toThrow();
  });
});
