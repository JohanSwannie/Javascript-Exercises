function convertStringToCamelCase2(stringToConvert2) {
  return stringToConvert2.replace(/[_-]\w/gi, (character) =>
    character[1].toUpperCase()
  );
}

console.log(
  `Converted string is : ${convertStringToCamelCase2("national-sport_meeting")}`
);
