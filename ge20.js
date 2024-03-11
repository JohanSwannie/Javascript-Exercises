const convertStringToCamelCase = (stringToConvert) => {
  stringToConvert = stringToConvert.split("");
  return stringToConvert
    .map((character, index) => {
      if (character == "-" || character == "_") {
        character = stringToConvert[index + 1].toUpperCase();
        stringToConvert.splice(index + 1, 1);
      }
      return character;
    })
    .join("");
};

console.log(
  `Converted string is : ${convertStringToCamelCase(
    "international_olymic-games"
  )}`
);
