// 1
const palindrome = (str) => {
  return str === str.split('').reverse().join('');
}

// 2
const palindrome = (str) => {
  return str.split('').every((el, index, arr) => {
    return el === arr[arr.length - (index + 1)]
  });
}
