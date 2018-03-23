const reverse = require('./index.js');

test('Should reverse function exists', () => {
  expect(reverse).toBeDefined();
  expect(typeof reverse).toEqual('function');
});

test('Should return passed string with the reversed order of characters', () => {
  expect(reverse('abcd')).toEqual('dcba');
  expect(reverse('  abcd')).toEqual('dcba  ');
});
