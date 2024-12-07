// This is the custom validation approach with JavaScript. 

const form = document.getElementById("number-form");
const input = document.getElementById("number-input");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  const value = Number(input.value);

  errorMessage.textContent = "";

  if (value <= 10) {
    errorMessage.textContent = "Please enter a number greater than 10.";
    event.preventDefault(); 
  }
});

// This is the approach with browser validation.

// const form = document.getElementById("number-form");
// const input = document.getElementById("number-input");

// form.addEventListener("submit", (event) => {
//   const value = Number(input.value);

//   if (value <= 10) {
//     alert("Please enter a number greater than 10.");
//     event.preventDefault(); 
//   }
// });

