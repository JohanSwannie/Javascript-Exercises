function removeSmallest(numbers) {
  let newArray = [];
  if (numbers.length === 0) {
    return newArray;
  }
  let smallestIndex = 0;
  let smallestNumber = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
      smallestIndex = i;
    }
  }
  newArray = numbers
    .slice(0, smallestIndex)
    .concat(numbers.slice(smallestIndex + 1));
  return newArray;
}

console.log(`New array is : ${removeSmallest([5, 9, 9, 2, 1, 3, 8, 1, 2, 7])}`);

let array7 = [9, 8, 12, 21, 7, 15, 29, 10];

let array8 = array7.slice(0, 4).concat(array7.slice(5, 7));

console.log(array8);
