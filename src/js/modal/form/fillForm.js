export default function fillForm(formHTML, library) {
  if (formHTML.dataset.index) {
    let index = parseInt(formHTML.dataset.index);
    let book = library[index];

    let inputs = formHTML.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.id == "book-name") {
        input.value = book.title;
      } else if (input.id == "book-author") {
        input.value = book.author;
      } else if (input.id == "book-pages") {
        input.value = book.pages;
      }
    });

    let selects = formHTML.querySelectorAll("select");
    selects.forEach((select) => {
      if (select.id == "book-status") {
        select.value = book.status;
      } else if (select.id == "book-score") {
        select.value = book.score;
      }
    });
  }
}
