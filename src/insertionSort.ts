function insertionSort<T>([...array]: ReadonlyArray<T>): ReadonlyArray<T> {
  let i;
  let j;
  const arrLength = array.length;
  for (i = 1; i < arrLength; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }
  return array;
}

export default insertionSort;
