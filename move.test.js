const move = require("./move");

describe("distance calculation", () => {
  describe("Move", () => {
    test("1 0 N", () => {
      expect(move([1, 0, 0], "M")).toEqual([1, 1, 0]);
    });
    test("1 0 E", () => {
      expect(move([1, 0, 1], "M")).toEqual([2, 0, 1]);
    });
    test("1 1 S", () => {
      expect(move([1, 1, 2], "M")).toEqual([1, 0, 2]);
    });
    test("1 0 W", () => {
      expect(move([1, 0, 3], "M")).toEqual([0, 0, 3]);
    });
  });
  describe("Left", () => {
    test("1 0 N", () => {
      expect(move([1, 0, 0], "L")).toEqual([1, 0, 3]);
    });
    test("1 0 E", () => {
      expect(move([1, 0, 1], "L")).toEqual([1, 0, 0]);
    });
    test("1 0 S", () => {
      expect(move([1, 0, 2], "L")).toEqual([1, 0, 1]);
    });
    test("1 0 W", () => {
      expect(move([1, 0, 3], "L")).toEqual([1, 0, 2]);
    });
  });
  describe("Right", () => {
    test("1 0 N", () => {
      expect(move([1, 0, 0], "R")).toEqual([1, 0, 1]);
    });
    test("1 0 E", () => {
      expect(move([1, 0, 1], "R")).toEqual([1, 0, 2]);
    });
    test("1 0 S", () => {
      expect(move([1, 0, 2], "R")).toEqual([1, 0, 3]);
    });
    test("1 0 W", () => {
      expect(move([1, 0, 3], "R")).toEqual([1, 0, 0]);
    });
  });
});
