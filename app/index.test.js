import { add2Nums } from "./index.js";
import { test, expect } from "vitest";

test("1 + 1 = 2", () => {
  expect(add2Nums(1, 1)).toBe(2);
});
