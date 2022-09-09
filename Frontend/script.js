let numberBtn = document.querySelector(".numbers"),
  clearBtn = document.querySelector("#clear"),
  operatorBtns = document.querySelector(".operators"),
  equal = document.querySelector("#equal");
  

// Object with data for calculation
var calculationValue = {
  numberOne: [],
  numberTwo: [],
  result: [],
  operator: null,
  reset: function () {
    this.numberOne = [];
    this.numberTwo = [];
    this.operator = null;
    this.result = [];
  },
};

// Display start
var outputField = document.getElementById("outputField");
outputField.innerHTML = 0;

// Shows the digit array in outputfield
function showDigit(sign) {
  outputField.innerHTML = sign;
}

// Fill the calculationValue object with value
function updateData(key, value) {
  key.push(value);
  showDigit(key.join(""));
}

// Calculate both value of numberOne & numberTwo
function calculate(digitOne, digitTwo) {
  if (calculationValue.operator === "+") {
    // Unary plus operator to convert them to numbers first
    calculationValue.result = +digitOne + +digitTwo;
  } else if (calculationValue.operator === "-") {
    calculationValue.result = digitOne - digitTwo;
  } else if (calculationValue.operator === "*") {
    calculationValue.result = digitOne * digitTwo;
  } else if (calculationValue.operator === "/") {
    calculationValue.result = digitOne / digitTwo;
  } else if (calculationValue.operator === "%") {
    calculationValue.result = digitOne %= digitTwo;
  }
}

// Reset numberOne and operator to continue the calculation
function continueCalc() {
  calculationValue.numberOne = [];
  calculationValue.numberTwo = [];
  calculationValue.operator = null;
}

function fixedDecimal(result) {
  // If decimal number more than 4 decimal places
  if (result.toString().indexOf(".") !== -1) {
    result = result.toFixed(4);
    console.log(result);
  }
}

// Select all Buttons and add value to object
document.querySelectorAll(".numbers").forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (calculationValue.operator !== null) {
      updateData(calculationValue.numberTwo, numberBtn.value);
      console.log(calculationValue.numberTwo);
    } else {
      updateData(calculationValue.numberOne, numberBtn.value);
      console.log(calculationValue.numberOne);
    }
  });
});

// Press operator button
document.querySelectorAll(".operators").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (outputField.length === 0) {
      alert("Gib eine Zahl ein!");
    } else if (calculationValue.result.length > 0) {
      continueCalc();
      calculationValue.operator = operator.value;
      showDigit(calculationValue.operator);
      calculate(calculationValue.numberTwo, calculationValue.result);
    } else {
      outputField.classList.remove("upperOutput");
      calculationValue.operator = operator.value;
      showDigit(calculationValue.operator);
      console.log(calculationValue);
    }
  });
});

// Clear all
clearBtn.addEventListener("click", () => {
  calculationValue.reset();
  outputField.classList.remove("upperOutput");
  outputField.innerHTML = 0;
});

// Show result or continue calculation
equal.addEventListener("click", () => {
  if (calculationValue.numberTwo.length > 0 && calculationValue.result > 0) {
    calculate(calculationValue.numberTwo, calculationValue.result);
  } else {
    calculate(calculationValue.numberOne, calculationValue.numberTwo);
  }
  outputField.className = "upperOutput";
  fixedDecimal(calculationValue.result);
  outputField.innerHTML = calculationValue.result;
  continueCalc();
  console.log(calculationValue.result);
});

// Keydown event
// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "1") {
//     showDigit(1);
//   }
// });
