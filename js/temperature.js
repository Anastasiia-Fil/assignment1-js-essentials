// Footer

(function () {
  const now = new Date();

  const yearEl = document.getElementById("year");
  const todayEl = document.getElementById("today");

  if (yearEl !== null) {
    yearEl.textContent = now.getFullYear();
  }

  if (todayEl !== null) {
    todayEl.textContent = now.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
})();

// Temperature converter
function convertTemperature() {
  // Get input elements
  const temperatureInput = document.getElementById("tempInput");
  const unitSelect = document.getElementById("unitSelect");

  // Get result elements
  const celsiusResult = document.getElementById("resultC");
  const fahrenheitResult = document.getElementById("resultF");
  const kelvinResult = document.getElementById("resultK");

  // Сonvert it from a string to a number
  const temperatureValue = parseFloat(temperatureInput.value);
  const selectedUnit = unitSelect.value;

  let celsius;
  let fahrenheit;
  let kelvin;

  // Conversion logic using calculation
  if (selectedUnit === "celsius") {
    celsius = temperatureValue;
    fahrenheit = (temperatureValue * 9) / 5 + 32;
    kelvin = temperatureValue + 273.15;
  } else if (selectedUnit === "fahrenheit") {
    fahrenheit = temperatureValue;
    celsius = ((temperatureValue - 32) * 5) / 9;
    kelvin = ((temperatureValue - 32) * 5) / 9 + 273.15;
  } else if (selectedUnit === "kelvin") {
    kelvin = temperatureValue;
    celsius = temperatureValue - 273.15;
    fahrenheit = ((temperatureValue - 273.15) * 9) / 5 + 32;
  }

  // Display results (rounded to 2 decimal places)
  celsiusResult.textContent = "Celsius: " + celsius.toFixed(2) + " °C";

  fahrenheitResult.textContent = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

  kelvinResult.textContent = "Kelvin: " + kelvin.toFixed(2) + " K";
}
