// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Error (division by zero)";
  }
  return number1 / number2;
}

// Helper: get values
function getNumbers() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  return { number1, number2 };
}

// Display result
function displayResult(result) {
  document.getElementById("calculator-result").textContent = result;
}

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  const { number1, number2 } = getNumbers();
  displayResult(add(number1, number2));
});

document.getElementById("subtrack").addEventListener("click", function () {
  const { number1, number2 } = getNumbers();
  displayResult(subtract(number1, number2));
});

document.getElementById("multiply").addEventListener("click", function () {
  const { number1, number2 } = getNumbers();
  displayResult(multiply(number1, number2));
});

document.getElementById("divide").addEventListener("click", function () {
  const { number1, number2 } = getNumbers();
  displayResult(divide(number1, number2));
});
