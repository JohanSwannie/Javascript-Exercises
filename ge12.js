let a = true && 20;
let b = 0 || 20;
let c = 0 && 20;

console.log(`${a} ${b} ${c}`);

let a2 = 20 + "10";
console.log(typeof a2);
let b2 = 20 + +"10";
console.log(typeof b2);
let c2 = 20 + -"10" + +"10";
console.log(typeof c2);
let d2 = "10" - "10" + "100";
console.log(typeof d2);
let e2 = "A" - "B" + 0xa;
console.log(typeof e2);

console.log(`${a2}, ${b2}, ${c2}, ${d2}, ${e2}`);

let x = [10, 20, 30, 40, 50];
let y = [50, 60];

x.reverse().push(y[0]);

console.log(x.length);

for (let a3 = 1; a3 < 10; a3 += 2) {
  console.log(a3);
}

let counter = 0;

while (counter++ < 10) console.log("Our Counter is " + counter++);

let route = { distance: 131, elevation: 1.4 };

for (let k in route) console.log(`${k} : ${route[k]}`);

let a4 = (n) => {
  return n > 2 ? n * a4(n - 1) : 2;
};

console.log(a4(7));

let counter2 = 2;

let interval = setInterval(() => {
  console.log(counter2);
  if (counter2-- <= 0) clearInterval(interval);
}, 1000);

function execute(todo, a, b) {
  return todo(a, b);
}

let power = (x2, y2) => x2 ** y2;

console.log(execute(power, 3, 2));

const a5 = "hello";

try {
  console.log(a5.toUpperCase());
} catch (error) {
  console.log(a5);
} finally {
  console.log(a5);
}
