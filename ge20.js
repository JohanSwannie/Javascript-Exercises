const romanObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let endResult = 0;

const romanNumberToInteger = (romanNumber) => {
  for (let i = 0; i < romanNumber.length; i++) {
    if (romanObject[romanNumber[i]] < romanObject[romanNumber[i + 1]]) {
      endResult -= romanObject[romanNumber[i]];
    } else {
      endResult += romanObject[romanNumber[i]];
    }
  }
  return endResult;
};

let inputRomanNumber = "VI";

let romanToInt = `The Roman Number ${inputRomanNumber} converts to ${romanNumberToInteger(
  inputRomanNumber
)}`;
console.log(romanToInt);
