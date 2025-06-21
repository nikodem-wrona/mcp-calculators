import { describe, expect, it } from "vitest";

import { calculateOhmLaw } from "../ohm-law";

describe("calculateOhmLaw", () => {
  it("should calculate resistance", () => {
    const result = calculateOhmLaw({ voltage: 12, current: 2 });
    expect(result.resistance).toBe(6);
  });

  it("should calculate current", () => {
    const result = calculateOhmLaw({ voltage: 12, resistance: 6 });
    expect(result.current).toBe(2);
  });

  it("should calculate voltage", () => {
    const result = calculateOhmLaw({ current: 2, resistance: 6 });
    expect(result.voltage).toBe(12);
  });

  it("should handle zero voltage when calculating current", () => {
    const result = calculateOhmLaw({ voltage: 0, resistance: 10 });
    expect(result.current).toBe(0);
  });

  it("should handle zero voltage when calculating resistance", () => {
    const result = calculateOhmLaw({ voltage: 0, current: 5 });
    expect(result.resistance).toBe(0);
  });

  it("should handle zero current when calculating voltage", () => {
    const result = calculateOhmLaw({ current: 0, resistance: 10 });
    expect(result.voltage).toBe(0);
  });

  it("should handle zero resistance when calculating voltage", () => {
    const result = calculateOhmLaw({ current: 5, resistance: 0 });
    expect(result.voltage).toBe(0);
  });

  it("should throw an error when current is zero for resistance calculation", () => {
    expect(() => calculateOhmLaw({ voltage: 12, current: 0 })).toThrow(
      "Current cannot be zero when calculating resistance.",
    );
  });

  it("should throw an error when resistance is zero for current calculation", () => {
    expect(() => calculateOhmLaw({ voltage: 12, resistance: 0 })).toThrow(
      "Resistance cannot be zero when calculating current.",
    );
  });
});
