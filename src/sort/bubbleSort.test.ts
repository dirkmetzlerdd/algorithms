import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";

const unsortedArrA = [1, 3, 8, 7, 2, 0, 100, 9, 5, 4, 6];
const sortedArrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

describe("Sort Array", () => {
  test("bubble sort", () => {
    expect(bubbleSort(unsortedArrA)).toEqual(sortedArrA);
  });
});
