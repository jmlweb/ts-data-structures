import init from './_lib/init';
import last from './_lib/last';
import { VALID_KEY } from './typings';

class Stack<T extends VALID_KEY> {
  public static create(): Stack<any> {
    return new Stack();
  }

  private items: ReadonlyArray<T> = [];

  public add(item: T): void {
    this.items = [...this.items, item];
  }

  public remove(): void {
    this.items = init(this.items);
  }

  public get length(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public peek(): T {
    return last(this.items);
  }
}

export default Stack;
