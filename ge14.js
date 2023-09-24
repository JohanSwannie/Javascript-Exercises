const obberman = [
  {
    name: "Julie Swan",
    career: "Artist",
    hobby: "Woodwork",
  },
  {
    name: "Johan Swan",
    career: "Software Developer",
    hobby: "Playing Trumpet",
  },
  {
    name: "Richard Swan",
    career: "Executive Chef",
    hobby: "Reading",
  },
  {
    name: "Chris Smit",
    career: "Regimental Sergeant Major",
    hobby: "Skysport",
  },
];

const container = document.querySelector(".container");

const descr = [
  "Name of Person is ",
  "Career of Person is ",
  "Hobby of Person is ",
];

let cntr = 0;

for (let instance of obberman) {
  const pipper = document.createElement("p");
  for (let entry in instance) {
    const spanny = document.createElement("span");
    spanny.innerHTML = `${
      cntr === 0
        ? descr[cntr]
        : cntr === 1
        ? descr[cntr]
        : cntr === 2
        ? descr[cntr]
        : null
    } ${instance[entry]} ${cntr < 2 ? " ----- " : ""}`;
    pipper.appendChild(spanny);
    cntr++;
  }
  cntr = 0;
  container.appendChild(pipper);
}
