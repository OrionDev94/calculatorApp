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

// Display start2
var outputField = document.getElementById("outputField");
outputField.innerHTML = 0;

function addValue(value) {
  if ()
    calculationValue.numberOne
}
// Select all Buttons and add value to object
document.querySelectorAll(".numbers").forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (calculationValue.operator !== null) {
      calculationValue.numberTwo.push(numberBtn.value);
      digitTwo = calculationValue.numberTwo.join("");
      outputField.innerHTML = calculationValue.numberTwo;
      showDigit(digitTwo);
    } else {
      calculationValue.numberOne.push(numberBtn.value);
      digitOne = calculationValue.numberOne.join("");
      showDigit(digitOne);
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
  outputField.classList.remove("upperOutput");
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
  } else if (calculationValue.operator === "-") {
    var result = digitOne - digitTwo;
  } else if (calculationValue.operator === "*") {
    var result = digitOne * digitTwo;
  } else if (calculationValue.operator === "/") {
    var result = digitOne / digitTwo;
  } else if (calculationValue.operator === "%") {
    var result = (digitOne %= digitTwo);
  }
  calculationValue.reset();
  outputField.className = "upperOutput";
  outputField.innerHTML = result;
  console.log(outputField.outerHTML);
});

// Keydown event
document.addEventListener("keydown", (evt) => {
  if (evt.key === "1") {
    showDigit(1);
  }
});
