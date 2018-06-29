/**
 * Reverse String
 * 
 * For given string return a new string
 * with the reversed order of characters.
 * 
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (str) => {
  const arr = str.split('');
  let newArray = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    newArray.push(arr[index]);
  };

  return newArray.join('');
};

module.exports = reverse;
