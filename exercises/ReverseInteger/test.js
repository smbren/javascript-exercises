const reverse = require('./index.js');

test('Should reverse function exists', () => {
  expect(reverse).toBeDefined();
  expect(typeof reverse).toEqual('function');
});

test('Should return integer that is the reverse ordering of numbers', () => {
  expect(reverse(500)).toEqual(5);
  expect(reverse(2394)).toEqual(4932);
  expect(reverse(-200)).toEqual(-2);
  expect(reverse(-324)).toEqual(-423);
});
