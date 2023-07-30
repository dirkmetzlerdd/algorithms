import { describe, expect, test } from "@jest/globals";
import { binarySerach } from "./search";

describe("Search", () => {
  test("binary search", () => {
    const data = [
      { id: 1, name: "Alex" },
      { id: 2, name: "Peter" },
      { id: 12, name: "Alice" },
      { id: 14, name: "Tom" },
      { id: 20, name: "Fernando" },
      { id: 24, name: "Sarah" },
      { id: 30, name: "Kyle" },
      { id: 40, name: "Niki" },
      { id: 70, name: "John" },
    ];

    expect(binarySerach(14, data)).toEqual({ id: 14, name: "Tom" });
  });
});
