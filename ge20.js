const determineIndexInsert = (array, number) => {
  array.sort((a, b) => a - b);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (number <= array[i]) {
      return i;
    }
  }
  return array2.length;
};

let passedArray = [12, 19, 10, 16, 18, 7, 20];
let passedNumber = 14;

console.log(determineIndexInsert(passedArray, passedNumber));
