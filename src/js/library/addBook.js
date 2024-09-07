export default function addBookToLibrary(library, bookObj) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title == bookObj.title) return;
  }
  library.push(bookObj);
}
