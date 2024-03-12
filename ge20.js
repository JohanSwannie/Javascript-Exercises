const checkTwoStrings = (array) => {
  for (let item of array) {
    for (let i in item) {
      if (item[i] === "") {
        console.log("We have found a space");
      }
    }
  }
};

let array = ["Families here are closer than Families there"];

checkTwoStrings(array);
