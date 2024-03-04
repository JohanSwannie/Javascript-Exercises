function operation(func, first, second) {
  return func(first, second);
}

const doIt = (o, t) => {
  return o * t;
};

console.log(operation(doIt, 12, 10));

// --------------------------------------------

let numbers1 = [100, 5, 80, 55, 70, 50, 10, 40, 30, 20];
let numbers2 = [9, 38, 14, 20, 21, 6, 18, 4];
let numbers3 = [17, 10, 19, 2, 28, 30, 5];
let letters1 = ["J", "A", "P", "E", "D", "Z", "V", "X"];

const sortThem = (a, b) => (a > b ? 1 : -1);

console.log(`numbers1 sorted are : ${numbers1.sort(sortThem)}`);
console.log(`numbers2 sorted are : ${numbers2.sort(sortThem)}`);
console.log(`numbers3 sorted are : ${numbers3.sort(sortThem)}`);
console.log(`letters1 sorted are : ${letters1.sort(sortThem)}`);

// ------------------------------------------------------

let names = [27, 30, 15, 14, 20, 3];

names.forEach((number) =>
  number % 2 === 0 ? console.log(number) : console.log("OOPS!")
);

// ------------------------------------------------------------

let addition = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

console.log(`Addition Result is : ${addition(14, 3)}`);

let subtraction = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

console.log(`Subtraction Result is : ${subtraction(93, 14)}`);

let multiplication = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(`Multiplication Result is : ${multiplication(16, 17)}`);
