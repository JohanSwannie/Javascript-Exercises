function truncateTheString(str, num) {
  if (str.length > num) {
    return str.slice(11, num) + "...";
  } else {
    return str;
  }
}

let stringToTruncate = "Jack runs down the hill at a fast pace";
let truncateLength = 21;

console.log(`${truncateTheString(stringToTruncate, truncateLength)}`);
