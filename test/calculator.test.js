const calculator = require('../services/calculator')
 
test('sum of two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });