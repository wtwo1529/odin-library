import Book from "../../book/book";

function isNumber(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}
export default function submitForm(formHTML, library) {
  let inputs = formHTML.querySelectorAll("input");
  let selects = formHTML.querySelectorAll("select");
  let values = [];

  inputs.forEach((input) => {
    if (isNumber(input.value)) {
      values.push(parseInt(input.value));
    } else {
      values.push(input.value);
    }
  });

  selects.forEach((select) => {
    if (isNumber(select.value)) {
      values.push(parseInt(select.value));
    } else {
      values.push(select.value);
    }
  });

  if (formHTML.dataset.index) {
    library.updateBook(parseInt(formHTML.dataset.index), values);
    return undefined;
  } else {
    let book = new Book(...values);
    return book;
  }
}
