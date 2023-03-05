type NestedArrayOrNumber<T> = Array<T> | number;
type nestedSumInput = Array<NestedArrayOrNumber<NestedArrayOrNumber<number>>>;

export function nestedSum(arr: nestedSumInput) {
  let result: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result += nestedSum(arr[i] as nestedSumInput);
    } else {
      result += arr[i] as number;
    }
  }

  return result;
}
