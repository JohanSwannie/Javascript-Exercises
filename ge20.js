const findElementToBeTrue = (array, func) => {
  let number = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    number = array[i];
    if (func(number) === true) {
      newArray.push(number);
    }
  }
  return newArray;
};

let arrayToPass = [13, 3, 9, 15, 14, 10, 19, 35];

console.log(`${findElementToBeTrue(arrayToPass, (num) => num % 2 === 0)}`);
