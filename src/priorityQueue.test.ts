import PriorityQueue from './priorityQueue';

describe('Queue', () => {
  const priorityQueue = PriorityQueue.create();
  const firstValue = 'foo';
  const secondValue = 'bar';
  const emergencyOne = 'emergency1';

  it('queue is valid', () => {
    expect(priorityQueue).toBeInstanceOf(PriorityQueue);
  });

  it('queue is empty at first', () => {
    expect(priorityQueue.isEmpty).toBe(true);
  });

  it('queue length should be 3 after adding 2 normal items and 1 priority item', () => {
    priorityQueue.add(firstValue);
    priorityQueue.add(secondValue);
    priorityQueue.add(emergencyOne, true);
    expect(priorityQueue.length).toBe(3);
  });

  it('queue should peek at emergencyItem', () => {
    expect(priorityQueue.peek).toBe(emergencyOne);
  });

  it('queue should peek at normal item after dequeueing', () => {
    priorityQueue.remove();
    expect(priorityQueue.peek).toBe(firstValue);
  });

  it('queue should peek at second item when dequeueing', () => {
    priorityQueue.remove();
    expect(priorityQueue.peek).toBe(secondValue);
    priorityQueue.remove();
  });

  it('queue should not fail when dequeueing over an empty queue', () => {
    expect(() => {
      priorityQueue.remove();
    }).not.toThrow();
  });

  it('peek should not fail over an empty queue', () => {
    expect(() => {
      /* tslint:disable-next-line no-unused-expression*/
      priorityQueue.peek;
    }).not.toThrow();
  });
});
