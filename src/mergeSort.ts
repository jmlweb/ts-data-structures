function mergeSort<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(
  [...left]: ReadonlyArray<T>,
  [...right]: ReadonlyArray<T>
): ReadonlyArray<T> {
  let arr: T[] = [];
  let positions = {
    left,
    right
  };
  while (positions.left.length && positions.right.length) {
    const updatedKey =
      positions.left[0] <= positions.right[0] ? 'left' : 'right';
    const [first, ...rest] = positions[updatedKey];
    positions = {
      ...positions,
      [updatedKey]: rest
    };
    arr = [...arr, first];
  }
  return [...arr, ...positions.left, ...positions.right];
}

export default mergeSort;
