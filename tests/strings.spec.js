const { findString } = require("../utils/strings");

describe("the findString function returns the correct index", () => {
  it("takes 4, returns '5'", () => {
    const result = findString(4);
    expect(result).toBe("5");
  });
  it("takes 5, returns '4'", () => {
    const result = findString(5);
    expect(result).toBe("4");
  });
  it("takes 6, returns '4'", () => {
    const result = findString(6);
    expect(result).toBe("4");
  });
  it("takes 10, returns '3'", () => {
    const result = findString(10);
    expect(result).toBe("3");
  });
  it("takes 15, returns '2'", () => {
    const result = findString(15);
    expect(result).toBe("2");
  });
  it("takes 19, returns '1'", () => {
    const result = findString(19);
    expect(result).toBe("1");
  });
  it("takes 24, returns '0'", () => {
    const result = findString(24);
    expect(result).toBe("0");
  });
});
