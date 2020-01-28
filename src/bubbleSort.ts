function bubbleSort<T>([...array]: ReadonlyArray<T>): ReadonlyArray<T> {
  let swapped = false;
  do {
    swapped = false;
    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        const temporary = item;
        array[index] = array[index + 1];
        array[index + 1] = temporary;
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

export default bubbleSort;
