import Queue from './queue';

class PriorityQueue<T> {
  public static create(): PriorityQueue<any> {
    return new PriorityQueue();
  }

  private lowPriorityQueue: Queue<T> = Queue.create();
  private highPriorityQueue: Queue<T> = Queue.create();

  public add(item: T, isHighPriority?: boolean): void {
    if (isHighPriority) {
      this.highPriorityQueue.add(item);
    } else {
      this.lowPriorityQueue.add(item);
    }
  }

  public remove(): void {
    if (this.highPriorityQueue.length) {
      this.highPriorityQueue.remove();
    } else {
      this.lowPriorityQueue.remove();
    }
  }

  public get length(): number {
    return this.highPriorityQueue.length + this.lowPriorityQueue.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public peek(): T {
    if (this.highPriorityQueue.length) {
      return this.highPriorityQueue.peek();
    }
    return this.lowPriorityQueue.peek();
  }
}

export default PriorityQueue;
