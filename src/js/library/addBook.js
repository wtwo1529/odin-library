export default function addBookToLibrary(library, bookObj) {
  for (let i = 0; i < library.length; i++) {
    if (
      library[i].title == bookObj.title &&
      library[i].author == bookObj.author
    )
      return false;
  }
  library.push(bookObj);
  return true;
}
