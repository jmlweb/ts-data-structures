function tail<T>(x: ReadonlyArray<T>): ReadonlyArray<T> {
  return x.slice(1);
}

export default tail;
