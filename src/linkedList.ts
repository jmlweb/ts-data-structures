import { VALID_KEY } from './typings';

class Node<T extends VALID_KEY> {
  public static create(value: any): Node<any> {
    return new Node(value);
  }
  public value: T;
  public next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList<T extends VALID_KEY> {
  public static create(): LinkedList<any> {
    return new LinkedList();
  }

  public length: number = 0;
  private head: Node<T> | undefined = undefined;
  private tail: Node<T> | undefined = undefined;

  public add(value: T): Node<T> {
    const node = Node.create(value);

    if (this.tail !== undefined) {
      this.tail.next = node;
    }
    if (this.head === undefined) {
      this.head = node;
    }

    this.tail = node;
    this.length += 1;

    return node;
  }

  public remove(): Node<T> | undefined {
    let removed;
    if (this.isEmpty) {
      return removed;
    }

    if (this.length === 1) {
      removed = this.head;
      this.head = undefined;
      this.tail = undefined;
      this.length = 0;
      return removed;
    }

    let current = this.head;
    while (current) {
      const isPenultimate = current.next === this.tail;
      if (isPenultimate) {
        removed = current.next;
        current.next = undefined;
        this.tail = current;
        this.length -= 1;
        break;
      }

      current = current.next;
    }
    return removed;
  }

  public get(index: number): Node<T> | undefined {
    if (this.isOutOfRange(index)) {
      return undefined;
    }

    let current = this.head;
    let i = 0;
    while (i < index) {
      i += 1;
      current = (current as Node<T>).next;
    }

    return current;
  }

  public removeByIndex(index: number): Node<T> | undefined {
    let removed;

    if (this.isOutOfRange(index)) {
      return removed;
    }

    if (index === 0) {
      removed = this.head;
      this.head = (this.head as Node<T>).next;
      this.length -= 1;
      return removed;
    }

    let current = this.head;
    let previous;
    let i = 0;
    while (i < index) {
      i += 1;
      previous = current;
      current = (current as Node<T>).next;
    }
    removed = (previous as Node<T>).next;
    (previous as Node<T>).next = (current as Node<T>).next;

    if ((previous as Node<T>).next === undefined) {
      this.tail = previous;
    }

    this.length -= 1;
    return removed;
  }

  public get isEmpty(): boolean {
    return this.length === 0;
  }

  public print(): string {
    let values: ReadonlyArray<T> = [];
    let current = this.head;
    while (current) {
      values = [...values, current.value];
      current = current.next;
    }
    return values.join(' => ');
  }

  private isOutOfRange(index: number): boolean {
    return index < 0 || index > this.length - 1;
  }
}

export default LinkedList;
