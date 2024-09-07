import Book from "../../book/book";

function isNumber(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}
export default function submitForm(formHTML) {
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

  let book = new Book(...values);
  return book;
}
