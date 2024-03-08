let numbersArray = [];

const setTheLocalStorage = () => {
  localStorage.setItem("numbers", JSON.stringify(numbersArray));
};

const getTheLocalStorage = () => {
  numbersArray = JSON.parse(localStorage.getItem("numbers"));
};

let displayString = "";
let joiner = "";

const displayNumbers = () => {
  if (numbersArray.length > 0) {
    numbersArray.sort((a, b) => a - b);
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] === numbersArray[numbersArray.length - 1]) {
        joiner = "";
      } else {
        joiner = " - ";
      }
      displayString += `${numbersArray[i]} ${joiner} `;
    }
    document.getElementById("spanner").innerHTML = displayString;
    displayString = "";
  } else {
    displayString = "numbersArray have no items!";
    document.getElementById("spanner").innerHTML = displayString;
    displayString = "";
  }
};

if (!localStorage.getItem("numbers")) {
  setTheLocalStorage();
} else {
  getTheLocalStorage();
  displayNumbers();
}

const addNumber = () => {
  while (true) {
    anotherNumb = Number(prompt("add another numb?"));
    if (anotherNumb) {
      numbersArray.push(anotherNumb);
      setTheLocalStorage();
      getTheLocalStorage();
      displayNumbers();
    } else {
      break;
    }
  }
};

const removeNumbers = () => {
  localStorage.removeItem("numbers");
  numbersArray = [];
  displayString = "numbersArray have no items!";
  document.getElementById("spanner").innerHTML = displayString;
  displayString = "";
};
