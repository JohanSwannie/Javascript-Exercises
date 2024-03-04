// One Liner to get factorial

const getFactorial = (n) => (n > 1 ? n * getFactorial(n - 1) : 1);

alert(getFactorial(5));

// One Liner to get fibonacci

const getFibonacci = (n) =>
  n === 0 ? 0 : n === 1 ? 1 : getFibonacci(n - 1) + getFibonacci(n - 2);

alert(getFibonacci(5));
