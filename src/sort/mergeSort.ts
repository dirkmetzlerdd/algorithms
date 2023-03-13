export default function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) return arr;

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(
  sortedArr1: Array<number>,
  sortedArr2: Array<number>
): Array<number> {
  const result: Array<number> = [];

  while (sortedArr1.length && sortedArr2.length) {
    if (sortedArr1[0] <= sortedArr2[0]) {
      result.push(sortedArr1.shift() as number);
    } else {
      result.push(sortedArr2.shift() as number);
    }
  }

  return result.concat(sortedArr1, sortedArr2);
}
