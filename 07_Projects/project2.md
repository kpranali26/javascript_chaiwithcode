## projeact number 2 

solution code
``` javascript

const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Check if height or weight is not a valid number or is less than or equal to 0
  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please provide a valid height';
  }
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please provide a valid weight';
  }
  else {
    const bmi = (weight / (height * height) * 10000).toFixed(2); // Corrected BMI formula
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```