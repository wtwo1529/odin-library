export default function renderLibrary(library, libraryHTML) {
  libraryHTML.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    let bookIndex = i + 1;
    let book = library[i];

    const libraryRow = document.createElement("tr");
    const index = document.createElement("td");
    index.textContent = bookIndex;
    libraryRow.appendChild(index);

    for (prop in book) {
      if (prop == "read") {
        if (book[prop] == "completed") {
          index.classList.add("read");
        } else if (book[prop] == "onhold") {
          index.classList.add("onhold");
        } else if (book[prop] == "dropped") {
          index.classList.add("dropped");
        } else if (book[prop] == "reading") {
          index.classList.add("reading");
        } else {
          index.classList.add("notread");
        }
        continue;
      }
      if (prop == "title") {
        const btn = document.createElement("button");
        btn.textContent = "Edit";
        btn.addEventListener("click", () => {
          const editFormModal = document.querySelector("#editFormModal");
          editFormModal.setAttribute("value", bookIndex);
          openModal(editFormModal);

          const bookName = editFormModal.querySelector("#book-name2");
          const bookAuthor = editFormModal.querySelector("#book-author2");
          const bookPages = editFormModal.querySelector("#book-pages2");
          const bookStatus = editFormModal.querySelector("#book-status2");
          const bookScore = editFormModal.querySelector("#book-score2");
          bookName.value = book.title || "";
          bookAuthor.value = book.author || "";
          bookPages.value = book.pages || "";
          bookStatus.value = book.read || "";
          bookScore.value = book.score || "";
        });

        btn.classList.add("edit-btn");

        const btnColumn = document.createElement("td");
        btnColumn.classList.add("btnColumn");
        btnColumn.appendChild(btn);
        libraryRow.appendChild(btnColumn);
      }
      const property = document.createElement("td");
      property.textContent = book[prop];
      libraryRow.appendChild(property);
    }
    libraryHTML.appendChild(libraryRow);
  }
}
