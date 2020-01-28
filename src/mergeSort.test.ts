import mergeSort from './mergeSort';

it('insertionSort', () => {
  const source = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
  expect(mergeSort(source)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
