let numberBtn = document.querySelector(".numbers"),
  clearBtn = document.querySelector("#clear"),
  operatorBtns = document.querySelector(".operators"),
  result = "",
  equal = document.querySelector("#equal"),
  interim,
  digitOne,
  digitTwo;

// Object with data for calculation
var calculationValue = {
  numberOne: [],
  numberTwo: [],
  operator: null,
  reset: function () {
    this.numberOne = [];
    this.numberTwo = [];
    this.operator = null;
  },
};

// Display start
var outputField = document.getElementById("outputField");
outputField.innerHTML = 0;

// Select all Buttons with digit and converts them to text
document.querySelectorAll(".numbers").forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (calculationValue.operator !== null) {
      calculationValue.numberTwo.push(numberBtn.value);
      digitTwo = calculationValue.numberTwo.join("");
      outputField.innerHTML = calculationValue.numberTwo;
      showDigit(digitTwo);
      console.log(digitTwo);
    } else {
      calculationValue.numberOne.push(numberBtn.value);
      digitOne = calculationValue.numberOne.join("");
      showDigit(digitOne);
      console.log(digitOne);
    }
  });
});

// Press operator button
document.querySelectorAll(".operators").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (calculationValue.numberOne !== []) {
      calculationValue.operator = operator.value;
      showDigit(calculationValue.operator);
      console.log(calculationValue.operator);
    }
  });
});

// Clear all
clearBtn.addEventListener("click", () => {
  calculationValue.reset();
  outputField.innerHTML = 0;
  console.log(calculationValue);
});

// Shows the digit array in outputfield
function showDigit(calculation) {
  outputField.innerHTML = calculation;
}

// Show result
equal.addEventListener("click", () => {
  if (calculationValue.operator === "+") {
    // Unary plus operator to convert them to numbers first
    var result = +digitOne + +digitTwo;
    outputField.innerHTML = result;
    console.log(result);
  } else if (calculationValue.operator === "-") {
    var result = digitOne - digitTwo;
    outputField.innerHTML = result;
    console.log(result);
  } else if (calculationValue.operator === "*") {
    var result = digitOne * digitTwo;
    outputField.innerHTML = result;
    console.log(result);
  } else if (calculationValue.operator === "/") {
    var result = digitOne / digitTwo;
    outputField.innerHTML = result;
    console.log(result);
  } else if (calculationValue.operator === "%") {
    var result = (digitOne %= digitTwo);
    outputField.innerHTML = result;
    console.log(result);
  }
});
