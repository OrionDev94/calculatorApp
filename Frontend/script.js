let numberBtn = document.querySelector(".numbers"),
  outputField = document.getElementById("outputField"),
  clearBtn = document.querySelector("#clear"),
  operatorBtns = document.querySelectorAll(".operators"),
  numberOne = [],
  numberTwo = [],
  copieOfNumberOne = [];

// Display start
outputField.innerHTML = 0;

// Select all Buttons with digit and converts them to text
document.querySelectorAll(".numbers").forEach((el) => {
  el.addEventListener("click", () => {
    addDigitToArr(el.textContent);
  });
});

// Shows the digit array in outputfield
function showDigit(digit) {
  outputField.innerHTML = digit;
}

// Set the digit of clicked button at the beginning Array
function addDigitToArr(digit) {
  numberOne.push(digit);
  let finalNumber = numberOne.join("");
  showDigit(finalNumber);
  console.log(finalNumber);
}

// Clear all
clearBtn.addEventListener("click", function () {
  numberOne.length = 0;
  outputField.innerHTML = "0";
});

// Clear number and start new array/number
function clearDisplay() {}

// Rules the function of operator buttons --> should execute by pressing a button
function operatorRules() {
  if (operatorBtns)
    
}
// Press operator button
additionBtn.addEventListener("click", function () {
  showDigit("+");
  copieOfNumberOne = numberOne.slice();

  console.log(copieOfNumberOne);
  w;
});
