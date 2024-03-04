function operation(func, first, second) {
  return func(first, second);
}

const doIt = (o, t) => {
  return o * t;
};

console.log(operation(doIt, 12, 10));
