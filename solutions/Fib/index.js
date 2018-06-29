// 1
const fib = (i) => {
  if (i === 0) {
    return i
  } else if (i === 1) {
    return i
  } else {
    return fib(i - 2) + fib(i - 1);
  }
}

// 2
const recursiveFib = (n) => {
  const results = [0, 1];

  for (i = 2; i <= n; i++) {
    results.push(results[i - 2] + results[i - 1]);
  }

  return results[n];
}

// 3
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

const fasterRecursiveFib = memoize(recursiveFib);
