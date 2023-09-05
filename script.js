//5/
let calculation = localStorage.getItem("calculatorResult") || "";

// Display the calculation when the page first loads.
jsCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  jsCalculation();

  localStorage.setItem("calculatorResult", calculation);
}

function jsCalculation() {
  document.querySelector(".displayCalculation").innerHTML = calculation;
}
