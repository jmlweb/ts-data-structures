import head from './_lib/head';
import tail from './_lib/tail';

class Queue<T> {
  public static create(): Queue<any> {
    return new Queue();
  }

  private queue: ReadonlyArray<T> = [];

  public add(item: T): void {
    this.queue = [...this.queue, item];
  }

  public remove(): void {
    this.queue = tail(this.queue);
  }

  public get length(): number {
    return this.queue.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public peek(): T {
    return head(this.queue);
  }
}

export default Queue;
