import { describe, expect, test } from "@jest/globals";
import { nestedSum } from "./nestedSum";
import { reverseString } from "./reverseString";

describe("Recursion", () => {
  test("nestedSum", () => {
    const arr = [1, 1, [[2]], 3, [2, 2, [3]]];
    expect(nestedSum(arr)).toBe(14);
  });

  test("reverseString", () => {
    const str = "reverse_";
    expect(reverseString(str)).toBe("_esrever");
  });
});
