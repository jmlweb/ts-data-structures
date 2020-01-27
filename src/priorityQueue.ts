import Queue from './queue';
import { VALID_KEY } from './typings';

class PriorityQueue<T extends VALID_KEY> {
  public static create(): PriorityQueue<any> {
    return new PriorityQueue();
  }

  private lowPriorityQueue: Queue<T> = Queue.create();
  private highPriorityQueue: Queue<T> = Queue.create();

  public add(item: T, isHighPriority?: boolean): T {
    return isHighPriority
      ? this.highPriorityQueue.add(item)
      : this.lowPriorityQueue.add(item);
  }

  public remove(): T {
    return this.highPriorityQueue.length
      ? this.highPriorityQueue.remove()
      : this.lowPriorityQueue.remove();
  }

  public get length(): number {
    return this.highPriorityQueue.length + this.lowPriorityQueue.length;
  }

  public get isEmpty(): boolean {
    return this.length === 0;
  }

  public get peek(): T {
    if (this.highPriorityQueue.length) {
      return this.highPriorityQueue.peek;
    }
    return this.lowPriorityQueue.peek;
  }
}

export default PriorityQueue;
