function insertionSort<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {
  const outputArray = [...array];
  let i;
  let j;
  for (i = 1; i < outputArray.length; i++) {
    for (j = 0; j < i; j++) {
      if (outputArray[i] < outputArray[j]) {
        const [item] = outputArray.splice(i, 1);
        outputArray.splice(j, 0, item);
      }
    }
  }
  return outputArray;
}

export default insertionSort;
