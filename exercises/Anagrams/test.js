const anagrams = require('./index.js');

test('Should anagrams function exists', () => {
  expect(anagrams).toBeDefined();
  expect(typeof anagrams).toEqual('function');
});

test('Should return true if passed string is an anagram', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBeTruthy();
});

test('Should return false if passed string is not an anagram', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
  expect(anagrams('One one', 'One one c')).toBeFalsy();
  expect(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')).toBeFalsy();
});
