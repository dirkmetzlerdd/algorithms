import { describe, expect, test } from "@jest/globals";
import { nestedSum } from "./nestedSum";

describe("Recursion", () => {
  test("nestedSum", () => {
    const arr = [1, 1, [[2]], 3, [2, 2, [3]]];
    expect(nestedSum(arr)).toBe(14);
  });
});
