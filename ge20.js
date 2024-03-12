let arrayOne = [19, 42, 13, 22, 24];
let arrayTwo = [26, 15, 10, 17, 28, 7];

arrayTwo.splice(3, 0, arrayOne);

console.log(arrayTwo.flat());
