const calculator = require('../services/calculator')
 
test('sum of two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(4, 5)).toBe(9);
    expect(calculator.add(-1, 2)).toBe(1);
  });

test('subtract two numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(6, 5)).toBe(1);
  expect(calculator.subtract(-1, 2)).toBe(-3);
});