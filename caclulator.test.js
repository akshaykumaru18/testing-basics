//describe() - Test plan
// it() /test() - test case
// expect() - assertion
const { add } = require("./calculator");
describe("Add feature of the calcuator", () => {
  test("Add 2 positive numbers", () => {
    expect(add(5, 10)).toBe(15); 
    //expect().toEqual()
    //expect().toBeTruthy()
    //expect().toBeFalsy()
    //expect().toBeDefined()
    //expect().toBeUndefined()
  });
  it("Add 2 negative numbers", () => {
    expect(add(-5, -10)).toBe(-15);
  });
});
