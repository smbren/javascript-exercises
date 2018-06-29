// 1
const vowels = (string) => {
  const vovels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  string.toLowerCase().split('').forEach(item => {
    vovels.indexOf(item) !== -1 ? count += 1 : null;
  });
  return count;
}

// 2
const vowels = (string) => {
  const vovels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  string.toLowerCase().split('').forEach(item => {
    vovels.indexOf(item) !== -1 ? count += 1 : null;
  });
  return count;
}

// 3
const vowels = (string) => {
  const matches = string.match(/[aeiou]/gi);
  let counter;
  matches === null ? counter = 0 : counter = matches.length;
  return counter;
}
