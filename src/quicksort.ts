function quickSort<T>([...array]: ReadonlyArray<T>): ReadonlyArray<T> {
  if (array.length < 2) {
    return array;
  }
  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i];
    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;
