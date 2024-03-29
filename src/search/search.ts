// by definition: array is sorted

type Person = { id: number; name: string };

export function binarySerach(
  id: number,
  arr: Array<Person>
): Person | undefined {
  let min = 0;
  let max = arr.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = arr[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return undefined;
}
