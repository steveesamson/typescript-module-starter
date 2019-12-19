import greet from "../src/index";

describe("greet", () => {
  it('should return "Hello world" with no argument', () => {
    const expected = "Hello world";
    expect(greet()).toBe(expected);
  });

  it('should return "Hello Steve" with "Steve" as argument', () => {
    const expected = "Hello Steve";
    expect(greet("Steve")).toBe(expected);
  });
});
