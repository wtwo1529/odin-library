import addBookToLibrary from "./addBook";
import renderBook from "./renderBook";

export default class Library {
  constructor(libraryHTML) {
    this.libraryHTML = libraryHTML;
    this.books = [];
  }
  addBook(overlay, modal, book) {
    addBookToLibrary(this.books, book);
    renderBook(this.books, this.libraryHTML, book, overlay, modal);
  }
}
