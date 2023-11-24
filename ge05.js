while (true) {
  let firstNumber = prompt("Enter first number OR enter 'q' to quit");

  if (firstNumber.toLowerCase() === "q") {
    break;
  }

  let secondNumber = prompt("Enter second number OR enter 'q' to quit");

  if (secondNumber.toLowerCase() === "q") {
    break;
  }

  let operand = prompt("Enter operand (+, -, * or /) OR enter 'q' to quit");

  if (operand.toLocaleLowerCase() === "q") {
    break;
  }

  let result;

  if (!firstNumber || !secondNumber || !operand) {
    break;
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

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
  alert(`The result of your calculation is ${result}`);
}
