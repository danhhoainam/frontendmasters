// data model
let displayNumber = "0";
let total = 0;
let previousOperator;
const result = document.querySelector(".result");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  render();
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      total = 0;
      previousOperator = null;
      displayNumber = "0";
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      doCalculation(parseInt(displayNumber));
      previousOperator = null;
      displayNumber = +total;
      total = 0;
      break;

    case "←":
      if (displayNumber.length === 1) {
        displayNumber = "0";
      } else {
        displayNumber = displayNumber.substring(0, displayNumber.length - 1);
      }
      break;

    case "+":
    case "-":
    case "x":
    case "÷":
      doMath(value);
      break;

    default:
      break;
  }
}

function handleNumber(value) {
  if (displayNumber === "0") {
    displayNumber = value;
  } else {
    displayNumber += value;
  }
}

function doMath(value) {
  if (displayNumber === "0") {
    return;
  }

  const intDisplayNumber = parseInt(displayNumber);
  if (total === 0) {
    total = intDisplayNumber;
  } else {
    doCalculation(intDisplayNumber);
  }

  previousOperator = value;
  displayNumber = "0";
}

function doCalculation(num) {
  if (previousOperator === "+") {
    total += num;
  } else if (previousOperator === "-") {
    total -= num;
  } else if (previousOperator === "x") {
    total *= num;
  } else {
    total /= num;
  }
}

function render() {
  result.innerText = displayNumber;
}

function init() {
  document.querySelector(".buttons").addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
  });
}

init();