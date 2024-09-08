import openModal from "../modal/openModal";
import fillForm from "../modal/form/fillForm";
import createEditBtn from "./createEditBtn";

export default function renderBook(
  library,
  libraryDisplay,
  bookObj,
  overlay,
  modal
) {
  const libraryRow = document.createElement("tr");

  let bookStatus = document.createElement("td");
  bookStatus.colSpan = 1;
  libraryRow.appendChild(bookStatus);

  let bookIndex = library.indexOf(bookObj);
  const index = document.createElement("td");
  index.textContent = `${bookIndex + 1}`;
  index.colSpan = 1;

  libraryRow.appendChild(index);
  for (let prop in bookObj) {
    if (prop == "status") {
      if (bookObj[prop] == "completed") {
        bookStatus.classList.add("read");
      } else if (bookObj[prop] == "onhold") {
        bookStatus.classList.add("onhold");
      } else if (bookObj[prop] == "dropped") {
        bookStatus.classList.add("dropped");
      } else if (bookObj[prop] == "reading") {
        bookStatus.classList.add("reading");
      } else if (bookObj[prop] == "plantoread") {
        bookStatus.classList.add("notread");
      }
      continue;
    }
    const property = document.createElement("td");
    property.textContent = bookObj[prop];
    if (prop == "author") {
      property.colSpan = 5;
      property.classList.add("align-left");
    } else if (prop == "title") {
      property.colSpan = 6;
      property.classList.add("align-left");

      let btn = createEditBtn(overlay, modal, library, bookIndex);

      const btnColumn = document.createElement("td");
      btnColumn.classList.add("btnColumn");
      btnColumn.appendChild(btn);
      btnColumn.colSpan = 1;
      libraryRow.appendChild(property);
      libraryRow.appendChild(btnColumn);
      continue;
    } else if (prop == "pages") {
      property.colSpan = 4;
    } else if (prop == "score") {
      property.colSpan = 2;
    } else continue;
    libraryRow.appendChild(property);
  }
  libraryDisplay.appendChild(libraryRow);
}
