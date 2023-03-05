type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

export function nestedSum(arr: Array<ValueOrArray<number>>) {
  let result: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result += nestedSum(arr[i] as Array<ValueOrArray<number>>);
    } else {
      result += arr[i] as number;
    }
  }

  return result;
}
