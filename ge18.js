let numbersArray = [12, 20];

const setTheLocalStorage = () => {
  localStorage.setItem("numbers", JSON.stringify(numbersArray));
  alert("Setting it");
};

const getTheLocalStorage = () => {
  numbersArray = JSON.parse(localStorage.getItem("numbers"));
  alert("Getting it");
};

if (!localStorage.getItem("numbers")) {
  setTheLocalStorage();
} else {
  getTheLocalStorage();
}

const addNumber = () => {
  while (true) {
    anotherNumb = Number(prompt("add another numb?"));
    if (anotherNumb) {
      numbersArray.push(anotherNumb);
      setTheLocalStorage();
    } else {
      break;
    }
  }
};

let displayString = "";
let joiner = "";

const displayNumbers = () => {
  getTheLocalStorage();
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
};
