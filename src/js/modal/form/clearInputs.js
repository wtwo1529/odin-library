function clearInputs(inputs) {
  inputs.forEach((input) => {
    input.value = "";
  });
}

function resetSelects(selects) {
  selects.forEach((select) => {
    select.value = "";
  });
}

export { clearInputs, resetSelects };
