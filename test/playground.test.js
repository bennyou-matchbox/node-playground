const playground = require('../services/playground')

test('test say hello world', () => {
    expect(playground.say_hello_world()).toBe("Hello World");
});

test('test calculate average of 1,2,3', () => {
    expect(playground.calculate_average([1,2,3])).toBe(2);
});

test('should be "acb"', () => {
    expect(playground.swap("abc")).toBe("acb");
  });
  
test('should be "1234"', () => {
    expect(playground.swap("1234")).toBe("1432");
  });