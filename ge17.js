function operation(func, first, second) {
  return func(first, second);
}

const doIt = (o, t) => {
  return o * t;
};

console.log(operation(doIt, 12, 10));

// --------------------------------------------

const inner3 = () => {
  console.log("inner3 1");
};

let outer3 = (callback3) => {
  console.log("outer3 1");
  let counter = 1;
  let timerId = setInterval(() => {
    console.log(`outer3 2 with counter : ${counter}`);
    counter++;
    callback3();
  }, 2000);
  setTimeout(() => {
    console.log("TIMER ID INTERVAL HAS BEEN CANCELLED");
    clearInterval(timerId);
  }, 20000);
};

console.log("test3 1");

outer3(inner3);

console.log("test3 2");
