const determineLargest = (array) => {
  return array.map((arr) => Math.max.apply(null, arr));
};

const array1 = [
  [27, 19, 39, 7, 11, 47],
  [14, 41, 35, 28, 20, 91],
  [31, 22, 50, 16, 12, 30],
  [51, 60, 23, 64, 33, 47],
];

console.log(
  `The largest number in each array is : ${determineLargest(array1)}`
);
