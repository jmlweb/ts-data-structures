function init<T>(x: ReadonlyArray<T>): ReadonlyArray<T> {
  return x.slice(0, x.length - 1);
}

export default init;
