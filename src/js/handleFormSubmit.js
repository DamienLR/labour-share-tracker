const form = document.querySelector(".form");
const formSubmitButton = document.querySelector(".formSubmitButton");
const inputLogins = document.querySelector(".inputLogins");
const inputDepartment = document.querySelector(".inputDepartment");
const inputTime = document.querySelector(".inputTime");
const formErrorText = document.querySelector(".formErrorText");

form.addEventListener("submit", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
// ensure the form needs to be submitted with the submit button

formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputLogins.value != "" &&
    inputDepartment.value != "" &&
    inputTime.value != ""
  ) {
    formErrorText.textContent = "";
    inputLogins.value = "";
    inputDepartment.value = "";
    inputTime.value = "";
  } else {
    formErrorText.textContent =
      "Please enter make sure no input fields are not empty before submitting.";
  }
});
