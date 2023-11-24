let indicator = " ";

while (indicator !== "q") {
  let firstNumber = Number(prompt("Enter first number"));
  let secondNumber = Number(prompt("Enter second number"));
  let operand = prompt("Enter operand (+, -, * or /)");
  let result = 0;
  if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        result = "Error: unknown operand";
    }
  } else {
    result = "Error: at least one of the entered values is not a number";
  }
  alert(`Answer is ${result}`);
  indicator = prompt(`Click OK to play again or enter 'q' to quit`);
}
