let numberBtn = document.querySelector(".numbers"),
  outputField = document.getElementById("outputField"),
  clearBtn = document.querySelector(".clear"),
  largeNumber = [];

//Display start
outputField.innerHTML = 0;

//Select all Buttons with digit and converts them to text
document.querySelectorAll(".numbers").forEach((number) => {
  number.addEventListener("click", () => {
    addDigitToArr(number.textContent);
  });
});

//Shows the Digit Array in outputfield
function showDigit(digit) {
  outputField.innerHTML = digit;
}

//Set the digit of clicked button at the beginning Array
function addDigitToArr(digit) {
  largeNumber.shift(digit);
  let finalNumber = largeNumber.join("");
  showDigit(finalNumber);
}

console.log(clearBtn);

clearBtn.addEventListener("click", function () {
  largeNumber.length = 0;
  outputField.innerHTML = "";  
  console.log(largeNumber.length);
})

