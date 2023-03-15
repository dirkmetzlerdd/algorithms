import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import { quickSort } from "./quickSort";

describe("Sort Array", () => {
  test("bubble sort", () => {
    const unsortedArrA = [1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6];
    const sortedArrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
    expect(bubbleSort(unsortedArrA)).toEqual(sortedArrA);
  });

  test("insertion sort", () => {
    const unsortedArrA = [1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6];
    const sortedArrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
    expect(insertionSort(unsortedArrA)).toEqual(sortedArrA);
  });

  test("merge sort", () => {
    const unsortedArrA = [1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6];
    const sortedArrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
    expect(mergeSort(unsortedArrA)).toEqual(sortedArrA);
  });

  test("quick sort", () => {
    const unsortedArrA = [1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6];
    const sortedArrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
    expect(quickSort(unsortedArrA)).toEqual(sortedArrA);
  });
});
