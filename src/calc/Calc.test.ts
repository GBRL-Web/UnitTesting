import Calc from "./Calc";

let calc: Calc;

describe("Check Calc function", () => {
  test("1+1 = 2", () => {
    expect(eval("1+ 1")).toBe(2);
  });
  test("2*5 = 10", () => {
    expect(eval("2* 5")).toBe(10);
  });
});
beforeAll(() => {
    console.log('Before all tests.');
    calc = new Calc();
});
describe('Calc', () => { 
    describe('Addition', () => { 
        test("1+1 = 2", () => {
          expect(calc.calc("1+ 1")).toBe(2);
        });
     })
})
