import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";
import insertionSort from "./indertionSort";

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
});
