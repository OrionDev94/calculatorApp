let numberBtn = document.querySelector(".numbers"),
  clearBtn = document.querySelector("#clear"),
  operatorBtns = document.querySelector(".operators"),
  result = "",
  equal = document.querySelector("#equal"),
  interim;

// Object with data fot calculation
var calculationValue = {
  numberOne: [],
  numberTwo: [],
  operator: null,
};

// Display start
var outputField = document.getElementById("outputField");
outputField.innerHTML = 0;

// Select all Buttons with digit and converts them to text
document.querySelectorAll(".numbers").forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (typeof calculationValue.operator !== null) {
      calculationValue.numberOne.push(numberBtn.value);
      var digitOne = calculationValue.numberOne.join("");
      showDigit(digitOne);
    } else {
      calculationValue.numberTwo.push(numberBtn.value);
      var digitTwo = calculationValue.numberTwo.join("");
      var operatorSign = calculationValue.operator.textContent;
      showDigit(digitOne + operatorSign + digitTwo);
    }
  });
});

// Press operator button
document.querySelectorAll(".operators").forEach((operator) => {
  operator.addEventListener("click", () => {
    interim = operator.textContent;
    outputField = interim;
  });
});

// Clear all
clearBtn.addEventListener("click", () => {
  for (var objectKey in calculationValues) {
    if (calculationValues.hasOwnProperty(objectKey)) {
      delete calculationValues[objectKey];
      outputField.innerHTML = 0;
    }
  }
});

// Set the sign of clicked button at the beginning Array
// function addDigitToArr(sign) {
//   if (sign === "+" || sign === "-" || sign === "/" || sign === "*") {
//     // Add values to object
//     calculationValues.operator = sign;
//   } else if (calculationValues.firstNumber) {
//     calculationValues.secondNumber = sign;
//     showDigit(calculationValues.secondNumber);
//   } else {
//     calculationValues.firstNumber = sign;
//     showDigit(calculationValues.firstNumber);
//   }
//   console.log(calculationValues.secondNumber);
// }

// Shows the digit array in outputfield
function showDigit(calculation) {
  outputField.innerHTML = calculation;
}

// Show result
equal.addEventListener("click", () => {
  let result =
    calculationValues.firstNumber +
    calculationValues.operator +
    calculationValues.secondNumber;
  outputField.innerHTML = result;
  console.log(result);
});
