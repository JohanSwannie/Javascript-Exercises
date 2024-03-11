function removeSmallest(numbers) {
  let smallestIdx = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, smallestIdx), ...numbers.slice(smallestIdx + 1)];
}

console.log(
  `New array is : ${removeSmallest([5, 9, -13, 9, 2, -21, 3, 8, 1, 2, 7])}`
);
