export default function bubbleSort(arr: Array<number>): Array<number> {
  let swapped = false;
  let count = 0;

  while (swapped || count === 0) {
    swapped = false;
    count++;

    for (let i = 0; i < arr.length - count; i++) {
      let j = arr[i];
      let k = arr[i + 1];

      if (typeof k !== "undefined" && j > k) {
        arr[i] = k;
        arr[i + 1] = j;
        swapped = true;
      }
    }
  }

  return arr;
}
