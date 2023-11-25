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
  "The name of the person is : ",
  "The career of the person is : ",
  "The hobby of the person is : ",
];

let c = 0;

for (let instance of obberman) {
  const pipper = document.createElement("p");
  for (let entry in instance) {
    const sp = document.createElement("span");
    sp.innerHTML = `${descr[c]} ${instance[entry]} ${c < 2 ? " ----- " : ""}`;
    pipper.appendChild(sp);
    c++;
  }
  c = 0;
  container.appendChild(pipper);
}
