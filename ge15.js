const container = document.querySelector(".container");

let motors = [];

const setTheLocalStorage = () => {
  localStorage.setItem("motors", JSON.stringify(motors));
};

const getTheLocalStorage = () => {
  motors = JSON.parse(localStorage.getItem("motors"));
};

if (!localStorage.getItem("motors")) {
  motors = [
    {
      model: "BMW",
      year: 2011,
    },
    {
      model: "Mercedes Benz",
      year: 2015,
    },
    {
      model: "Volvo",
      year: 2012,
    },
    {
      model: "Ford",
      year: 2016,
    },
  ];
  setTheLocalStorage();
  getTheLocalStorage();
} else {
  getTheLocalStorage();
}

const first = confirm("Do you want to see the first motor?");

if (first) {
  console.log(
    `The first motor is ${motors[0].model} of the year ${motors[0].year}`
  );
}

const last = confirm("Do you want to see the last motor?");

if (last) {
  let lIdx = motors.length - 1;
  console.log(
    `The last motor is ${motors[lIdx].model} of the year ${motors[lIdx].year}`
  );
}

const extra = confirm("Do you want to add another motor?");

if (extra) {
  const newModel = prompt("Please Enter a model name?");
  const newYear = prompt("Please enter a year for the model?");
  if (newModel && newYear) {
    let newMotor = {
      model: newModel,
      year: newYear,
    };
    motors.push(newMotor);
    setTheLocalStorage();
    getTheLocalStorage();
  } else {
    console.log("You did not enter both fields!");
  }
}

for (let item of motors) {
  for (let val in item) {
    console.log(`${val} : ${item[val]}`);
  }
}
