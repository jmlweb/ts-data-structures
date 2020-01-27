import LinkedList from './linkedList';

describe('LinkedList', () => {
  const firstItem = 'Foo';
  const secondItem = 'Bar';
  const thirdItem = 'Baz';

  const linkedList = LinkedList.create();

  it('list is empty at first', () => {
    expect(linkedList.isEmpty).toBe(true);
  });

  it('is possible to add items', () => {
    linkedList.add(firstItem);
    linkedList.add(secondItem);
    linkedList.add(thirdItem);
  });

  it('length is 3 now', () => {
    expect(linkedList.length).toBe(3);
  });

  it('prints the required output', () => {
    expect(linkedList.print()).toBe('Foo => Bar => Baz');
  });

  it('is possible to get by index and doesnt fail when getting something out of the range', () => {
    expect(linkedList.get(-1)?.value).toBe(undefined);
    expect(linkedList.get(0)?.value).toBe(firstItem);
    expect(linkedList.get(1)?.value).toBe(secondItem);
    expect(linkedList.get(2)?.value).toBe(thirdItem);
  });

  it('is possible to remove and doesnt fail when removing if the list is empty', () => {
    linkedList.remove();
    expect(linkedList.print()).toBe('Foo => Bar');
    linkedList.remove();
    expect(linkedList.print()).toBe('Foo');
    linkedList.remove();
    expect(linkedList.print()).toBe('');
    linkedList.remove();
    expect(linkedList.print()).toBe('');
  });

  it('is possible to remove by index and doesnt fail when removing something out of the range', () => {
    linkedList.add(firstItem);
    linkedList.add(secondItem);
    linkedList.add(thirdItem);
    linkedList.removeByIndex(-1);
    expect(linkedList.print()).toBe('Foo => Bar => Baz');
    linkedList.removeByIndex(1);
    expect(linkedList.print()).toBe('Foo => Baz');
    linkedList.removeByIndex(1);
    expect(linkedList.print()).toBe('Foo');
    linkedList.removeByIndex(0);
    expect(linkedList.print()).toBe('');
    linkedList.removeByIndex(0);
    expect(linkedList.print()).toBe('');
  });

  // it('prints the proper output after removing one item', () => {
  //   linkedList.remove();
  //   expect(linkedList.print()).toBe('Foo => Bar');
  // });
});
