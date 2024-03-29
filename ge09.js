const div1 = (a, b) => {
  if (b == 0) {
    throw new RangeError("Can't divide by 0");
  }
  return a / b;
};
console.log(div1(34, 4)); // -> 2
// console.log(div1(4, 0)); // -> Uncaught RangeError: Can’t divide by 0

const div2 = (a, b) => {
  if (b == 0) {
    throw new RangeError("You can't divide this number by zero");
  }
  return a / b;
};

let numbers = [5000, 1000, 500, 100, 10, 0];

let counter = 1;

for (let i = 0; i < numbers.length; i++) {
  let result;
  try {
    result = div2(5000, numbers[i]);
  } catch (e) {
    result = e.message;
  } finally {
    console.log(`Loop ${counter++} Completed`);
  }
  console.log(result);
}
