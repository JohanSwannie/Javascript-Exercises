function operation(func, first, second) {
  return func(first, second);
}

const doIt = (o, t) => {
  return o * t;
};

console.log(operation(doIt, 12, 10));

// --------------------------------------------

let numbers1 = [100, 5, 80, 55, 70, 50, 10, 40, 30, 20];
let numbers2 = [9, 38, 14, 20, 21, 6, 18, 4];
let numbers3 = [17, 10, 19, 2, 28, 30, 5];
let letters1 = ["J", "A", "P", "E", "D", "Z", "V", "X"];

const sortThem = (a, b) => (a > b ? 1 : -1);

console.log(`numbers1 sorted are : ${numbers1.sort(sortThem)}`);
console.log(`numbers2 sorted are : ${numbers2.sort(sortThem)}`);
console.log(`numbers3 sorted are : ${numbers3.sort(sortThem)}`);
console.log(`letters1 sorted are : ${letters1.sort(sortThem)}`);

// ------------------------------------------------------

let names = [27, 30, 15, 14, 20, 3];

names.forEach((number) =>
  number % 2 === 0 ? console.log(number) : console.log("OOPS!")
);

// ------------------------------------------------------------

let lightsIntervalId;

const changeColor = () => {
  lightsIntervalId = setInterval(flashText, 2000);
};

const sayHello = () => {
  alert("HELLO");
};

const flashText = () => {
  const boxElement = document.getElementById("my_box");
  boxElement.innerHTML === "Lights Off"
    ? (boxElement.innerHTML = "Lights On")
    : (boxElement.innerHTML = "Lights Off");
  boxElement.innerHTML === "Lights Off"
    ? (boxElement.style.backgroundColor = "#000")
    : (boxElement.style.backgroundColor = "#FFF");
  boxElement.innerHTML === "Lights Off"
    ? (boxElement.style.color = "#FFF")
    : (boxElement.style.color = "#000");
};

const stopTextColor = () => {
  clearInterval(lightsIntervalId);
  nIntervId = null;
};

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
