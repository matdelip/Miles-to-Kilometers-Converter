// Function to convert miles to kilometers
function convertMilesToKilometers(miles) {
  // Kilometers = miles is constant
  const kilometers = miles * 1.60934;
  return kilometers;
}
// Function to handle button click and perform conversion
function convertMilesToKilometersOnClick() {
  //Retrieve input value
  const milesInput = document.getElementById("milesInput").value;

// Convert input value to a number
const miles = parseFloat(milesInput);

// Check if input is valid
if (!isNaN(miles)) {
  const kilometers = convertMilesToKilometers(miles);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The distance of ${miles} miles is equal to ${kilometers} kilometers.`;
} else {
  alert('Please enter a valid number of miles.');
  }
}

// Event listener for the conversion button
const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", convertMilesToKilometersOnClick);
