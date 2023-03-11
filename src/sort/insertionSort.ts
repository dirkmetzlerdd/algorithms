export default function insertionSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    let j;
    for (j = i - 1; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }
  return arr;
}
