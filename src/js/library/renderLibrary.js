import renderBook from "./renderBook";

export default function renderLibrary(library, libraryDisplay, overlay, modal) {
  libraryDisplay.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    console.log(book);
    renderBook(library, libraryDisplay, book, overlay, modal);
  }
}
