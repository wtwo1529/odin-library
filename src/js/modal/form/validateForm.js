function handleEmptyField(input) {}

function validateInputs(inputs) {
  inputs.forEach((input) => {
    input.checkValidity();
  });
}

export { handleEmptyField, validateInputs };
