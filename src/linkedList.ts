class Node<T> {
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

class LinkedList<T> {
  public static create(): LinkedList<any> {
    return new LinkedList();
  }

  public length: number = 0;
  private head: Node<T> | undefined = undefined;
  private tail: Node<T> | undefined = undefined;

  public add(value: T): void {
    const node = Node.create(value);

    if (this.tail !== undefined) {
      this.tail.next = node;
    }
    if (this.head === undefined) {
      this.head = node;
    }

    this.tail = node;
    this.length += 1;
  }

  public remove(): void {
    if (!this.isEmpty()) {
      if (this.length === 1) {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
      } else {
        let current = this.head;
        while (current) {
          const isPenultimate = current.next === this.tail;
          if (isPenultimate) {
            current.next = undefined;
            this.tail = current;
            this.length -= 1;
            break;
          }

          current = current.next;
        }
      }
    }
  }

  public get(index: number): Node<T> | undefined {
    if (this.isOutOfRange(index)) {
      return undefined;
    }

    let current = this.head;
    let i = 0;
    while (i < index) {
      i += 1;
      current = current?.next;
    }

    return current;
  }

  public removeByIndex(index: number): void {
    if (!this.isOutOfRange(index) && this.head !== undefined) {
      if (index === 0) {
        this.head = this.head.next;
        this.length -= 1;
      } else {
        let current = this.head;
        let previous;
        let i = 0;
        while (i < index && current.next instanceof Node) {
          i += 1;
          previous = current;
          current = current.next;
        }
        if (previous instanceof Node) {
          previous.next = current?.next;

          if (previous.next === null) {
            this.tail = previous;
          }

          this.length -= 1;
        }
      }
    }
  }

  public isEmpty(): boolean {
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
    return index < 0 || index > this.length;
  }
}

export default LinkedList;
