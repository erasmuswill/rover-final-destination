const { processInput } = require("./index.js");
describe("stdin", () => {
  describe("argument #", () => {
    test("Errors on 1 input", () => {
      expect(() => processInput("a")).toThrow("Arguments invalid");
    });
    test("Errors on 2 inputs", () => {
      expect(() => processInput("a\nb")).toThrow("Arguments invalid");
    });
    test("Success case", () => {
      expect(processInput("8 8\n1 2 E\nMMLMRMMRRMML")).toBeTrue();
    });
  });
  describe("bound format", () => {
    test("Errors on 1 value", () => {
      expect(() => processInput("1\n2 2 E\nLL")).toThrow("Bounds invalid");
    });
  });
  describe("position format", () => {
    test("Errors on 1 value", () => {
      expect(() => processInput("1 1\n2\nLL")).toThrow("Position invalid");
    });
    test("Errors on 2 values", () => {
      expect(() => processInput("1 1\n2 E\nLL")).toThrow("Position invalid");
    });
  });
});
