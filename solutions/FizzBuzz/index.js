// 1
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log('fizzbuzz');
        continue;
      }
      console.log('fizz');
      continue;
    } else if (i % 5 === 0) {
      console.log('buzz');
      continue;
    } else {
      console.log(i);
    }
  }
}

// 2
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
      continue;
    }
    if (i % 3 === 0) {
      console.log('fizz');
      continue;
    }
    if (i % 5 === 0) {
      console.log('buzz');
      continue;
    }
    console.log(i);
  }
}

// 3
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    i % 15 === 0 ? console.log('fizzbuzz')
    : i % 3 === 0 ? console.log('fizz')
    : i % 5 === 0 ? console.log('buzz')
    : console.log(i);
  }
}
