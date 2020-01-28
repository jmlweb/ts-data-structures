import { performance } from 'perf_hooks';

import bubbleSort from './bubbleSort';

it('bubbleSort', () => {
  const source = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
  const t0 = performance.now();
  const result = bubbleSort(source);
  const t1 = performance.now();
  console.log(`bubbleSort took  ${(t1 - t0).toFixed(4)}ms`);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
