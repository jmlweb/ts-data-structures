import head from './_lib/head';
import tail from './_lib/tail';
import { VALID_KEY } from './typings';

class Queue<T extends VALID_KEY> {
  public static create(): Queue<any> {
    return new Queue();
  }

  private queue: ReadonlyArray<T> = [];

  public add(item: T): T {
    this.queue = [...this.queue, item];
    return item;
  }

  public remove(): T {
    const removed = this.peek;
    this.queue = tail(this.queue);
    return removed;
  }

  public get length(): number {
    return this.queue.length;
  }

  public get isEmpty(): boolean {
    return this.length === 0;
  }

  public get peek(): T {
    return head(this.queue);
  }
}

export default Queue;
