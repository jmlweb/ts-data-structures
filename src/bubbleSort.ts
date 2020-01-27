function bubbleSort<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {
  const outputArray = [...array];
  let swapped = false;
  do {
    swapped = false;
    outputArray.forEach((item, index) => {
      if (item > outputArray[index + 1]) {
        const temporary = item;
        outputArray[index] = outputArray[index + 1];
        outputArray[index + 1] = temporary;
        swapped = true;
      }
    });
  } while (swapped);
  return outputArray;
}

export default bubbleSort;
