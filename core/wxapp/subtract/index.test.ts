import { describe, it, expect } from "vitest";
import { subtract } from "./index";

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(3, 1)).toBe(2);
  });
});
