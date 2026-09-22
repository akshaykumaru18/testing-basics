//describe() - Test plan
// it() /test() - test case
// expect() - assertion
const { add,mul } = require("./calculator");
describe("Add feature of the calcuator", () => {
  test("Add 2 positive numbers", () => {
    expect(add(5, 10)).toBe(15); 

  });
  test("Multiply 2 positive numbers", () => {
    expect(mul(5, 10)).toBe(50); 

  });
  it("Add 2 negative numbers", () => {
    expect(add(-5, -10)).toBe(-15);
  });
});
