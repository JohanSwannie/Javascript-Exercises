const checkTwoStrings = (array) => {
  let string1 = array[0].toLowerCase();
  let string2 = array[1].toLowerCase();
  var cntr = 0;
  for (let i in string2) {
    if (string1.indexOf(string2[i]) !== -1) {
      cntr++;
    }
  }
  return cntr === string2.length;
};

let twoStringArray = ["Families", "Fame"];

console.log(checkTwoStrings(twoStringArray));
