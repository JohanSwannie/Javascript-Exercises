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

const compareNumbers = (a, b) => (a > b ? 1 : -1);

console.log(`The numbers1 sorted are now : ${numbers1.sort(compareNumbers)}`);
console.log(`The numbers2 sorted are now : ${numbers2.sort(compareNumbers)}`);
console.log(`The numbers3 sorted are now : ${numbers3.sort(compareNumbers)}`);
