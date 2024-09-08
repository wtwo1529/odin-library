import addBookToLibrary from "./addBook";
import renderBook from "./renderBook";
import renderLibrary from "./renderLibrary";

export default class Library {
  constructor(libraryDisplay, overlay, modal) {
    this.overlay = overlay;
    this.modal = modal;
    this.libraryDisplay = libraryDisplay;
    this.books = [];
  }
  addBook(book) {
    if (addBookToLibrary(this.books, book)) {
      renderBook(
        this.books,
        this.libraryDisplay,
        book,
        this.overlay,
        this.modal
      );
    }
  }
  updateBook(index, data) {
    this.books[index].update(data);
    this.reRender();
  }
  reRender() {
    renderLibrary(this.books, this.libraryDisplay, this.overlay, this.modal);
  }
}
