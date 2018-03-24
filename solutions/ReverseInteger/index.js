// 1
const reverse = (int) => {
  let arr = Math.abs(int).toString().split('').reverse();
  let removeZero = true;

  let newInt = arr.filter(element => {
    if (element !== '0') {
      removeZero = false;
    };

    if (element === '0' && removeZero === true) {
      return false;
    } else {
      return true;
    };
  });

  if (int < 0) {
    return -parseInt(newInt.join(''));
  } else {
    return parseInt(newInt.join(''));
  }
}

// 2
const reverse = (int) => {
  const arr = int.toString().split('').reverse().join('');
  return parseInt(arr) * Math.sign(int);
}
