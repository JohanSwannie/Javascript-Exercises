var largestNumber = [];

function largestNumbersInArrays1(array) {
  for (let p = 0; p < array.length; p++) {
    largestNumber.push(0);
  }
  for (var q = 0; q < array.length; q++) {
    for (var r = 0; r < array[q].length; r++) {
      if (array[q][r] > largestNumber[q]) {
        largestNumber[q] = array[q][r];
      }
    }
  }
  return largestNumber;
}

const array10 = [
  [19, 67, 57, 88, 7, 16, 33],
  [28, 71, 107, 22, 33, 51],
  [39, 44, 73, 55, 13, 10, 21],
  [444, 500, 177, 939, 239, 712],
  [49, 110, 183, 131, 77, 83],
];

let largestNumbers1 = `The largest number in each array is ${largestNumbersInArrays1(
  array10
)}`;

console.log(largestNumbers1);
