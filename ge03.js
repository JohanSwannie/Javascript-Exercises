let isOver = false;
let numArray = [];
let duplicates = 0;
let numbersGenerated = 0;

while (!isOver) {
  let continueLoop = confirm(
    `A valid random number will be added if no duplicates is found - do you want to continue?`
  );
  isOver = continueLoop === true ? false : true;
  if (!isOver) {
    randy = Math.floor(Math.random() * 40) + 1;
    if (!numArray.includes(randy)) {
      numArray.push(randy);
      numbersGenerated++;
    } else {
      duplicates++;
    }
  }
}

alert(
  "You reached the end of your random number search! See your list of numbers below"
);

const numberList = document.getElementById("numberList");

if (numArray.length === 0) {
  numberList.innerHTML = `Your number list is empty`;
} else {
  numberList.innerHTML = `Your number list is ${numArray} - during generation ${duplicates} duplicates were found and ${numbersGenerated} numbers were generated`;
}

const butter = document.getElementById("butty");

butty.style.display = "block";

butty.addEventListener("click", () => {
  location.reload();
});
