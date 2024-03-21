    let myLibrary = [];

    function Book(author, title, pages, read, score) {
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read,
        this.score = score
    }

    const libraryDisplay = document.querySelector('.library-display');

    function addBookToLibrary(author, title, pages, read, score) {
        const book = new Book(author, title, pages, read, score);
        
        elements: for (let i = 0; i < myLibrary.length; i++) 
        {
            for (prop in myLibrary[i]) 
            {
                if (myLibrary[i][prop] != book[prop]) 
                {
                    continue elements;
                }
            }
            return;
        }
        myLibrary.push(book);
        
        let bookIndex = myLibrary.indexOf(book) + 1;

        const libraryRow = document.createElement('tr');
        const index = document.createElement('td');
        index.textContent = bookIndex;
        libraryRow.appendChild(index);

        for (prop in book) {
            if (prop == "read") 
            {
                if (book.read == "completed") {
                    libraryRow.classList.add('read');
                }
                else if (book.read == "onhold") {
                    libraryRow.classList.add('onhold');
                }
                else if (book.read == "dropped") {
                    libraryRow.classList.add('dropped');
                }
                else if (book.read == "reading") {
                    libraryRow.classList.add('reading');
                }
                else 
                {  
                    libraryRow.classList.add('notread');
                }
                continue;
            }
            if (prop == "title") 
            {
                const btn = document.createElement('button');
                btn.textContent = "Edit";
                btn.addEventListener('click', () => {
                    const editFormModal = document.querySelector('#editFormModal')
                    editFormModal.setAttribute('value', bookIndex);
                    openModal(editFormModal);
                    
                    const bookName = editFormModal.querySelector('#book-name2');
                    const bookAuthor = editFormModal.querySelector('#book-author2');
                    const bookPages = editFormModal.querySelector('#book-pages2');
                    const bookStatus = editFormModal.querySelector('#book-status2');
                    const bookScore = editFormModal.querySelector('#book-score2');
                    bookName.value = book.title || "";
                    bookAuthor.value = book.author || "";
                    bookPages.value = book.pages || "";
                    bookStatus.value = book.read || "";
                    bookScore.value = book.score || "";
                })

                btn.classList.add('edit-btn');

                const btnColumn = document.createElement('td');
                btnColumn.classList.add('btnColumn');
                btnColumn.appendChild(btn);
                libraryRow.appendChild(btnColumn);
            }
            const property = document.createElement('td');
            property.textContent = book[prop];
            libraryRow.appendChild(property);

        }
        libraryDisplay.appendChild(libraryRow);
    }

    function viewLibrary() {
        libraryDisplay.innerHTML = "";
        for (let i = 0; i < myLibrary.length; i++) {
            
            let bookIndex = i + 1;
            let book = myLibrary[i];

            const libraryRow = document.createElement('tr');
            const index = document.createElement('td');
            index.textContent = bookIndex;
            libraryRow.appendChild(index);
        
            for (prop in book) {
                if (prop == "read") 
                {
                    if (book.read == "completed") {
                        libraryRow.classList.add('read');
                    }
                    else if (book.read == "onhold") {
                        libraryRow.classList.add('onhold');
                    }
                    else if (book.read == "dropped") {
                        libraryRow.classList.add('dropped');
                    }
                    else if (book.read == "reading") {
                        libraryRow.classList.add('reading');
                    }
                    else 
                    {  
                        libraryRow.classList.add('notread');
                    }
                    continue;
                }
                if (prop == "title") 
                {
                    const btn = document.createElement('button');
                    btn.textContent = "Edit";
                    btn.addEventListener('click', () => {
                        const editFormModal = document.querySelector('#editFormModal')
                        editFormModal.setAttribute('value', bookIndex);                        
                        openModal(editFormModal);

                        const bookName = editFormModal.querySelector('#book-name2');
                        const bookAuthor = editFormModal.querySelector('#book-author2');
                        const bookPages = editFormModal.querySelector('#book-pages2');
                        const bookStatus = editFormModal.querySelector('#book-status2');
                        const bookScore = editFormModal.querySelector('#book-score2');
                        bookName.value = book.title || "";
                        bookAuthor.value = book.author || "";
                        bookPages.value = book.pages || "";
                        bookStatus.value = book.read || "";
                        bookScore.value = book.score || "";
                    })
        
                    btn.classList.add('edit-btn');
        
                    const btnColumn = document.createElement('td');
                    btnColumn.classList.add('btnColumn');
                    btnColumn.appendChild(btn);
                    libraryRow.appendChild(btnColumn);
                }
                const property = document.createElement('td');
                property.textContent = book[prop];
                libraryRow.appendChild(property);
        
            }
            libraryDisplay.appendChild(libraryRow);
        }
    }

    const openAddBookModalBtn = document.querySelector('#newBookBtn');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    openAddBookModalBtn.addEventListener('click', () => {
            const modal = document.querySelector('#modal');
            openModal(modal);
        })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    const modalForm = document.querySelectorAll('.modal-form');
    const submitAddBookForm = document.querySelector('.submit-form');

    submitAddBookForm.addEventListener('click', () => {
        const bookName = document.querySelector('#book-name');
        const bookAuthor = document.querySelector('#book-author');
        const bookPages = document.querySelector('#book-pages');
        const bookStatus = document.querySelector('#book-status');
        const bookScore = document.querySelector('#book-score');

        if (bookName.value == '' || bookAuthor.value == '' || bookPages.value == '' || bookScore.value == 'select') return;
        else {
            addBookToLibrary(bookName.value, bookAuthor.value, parseInt(bookPages.value), bookStatus.value, parseInt(bookScore.value));
        }
        const modal = submitAddBookForm.closest(".modal");
        closeModal(modal);
    });

    const submitEditBookForm = document.querySelector('.submit-form2');
    const deleteForm = document.querySelector('.delete-form');

    submitEditBookForm.addEventListener('click', () => {
        const bookName = document.querySelector('#book-name2');
        const bookAuthor = document.querySelector('#book-author2');
        const bookPages = document.querySelector('#book-pages2');
        const bookStatus = document.querySelector('#book-status2');
        const bookScore = document.querySelector('#book-score2');
        
        const modal = deleteForm.closest('.modal');
        const bookIndex = parseInt(modal.getAttribute('value')) - 1;

        if (bookName.value == '' || bookAuthor.value == '' || bookPages.value == '' || bookScore.value == 'select') return;
        else 
        {
            let book = myLibrary[bookIndex];
            book.title = bookName.value;
            book.author = bookAuthor.value;
            book.pages = parseInt(bookPages.value);
            book.read = bookStatus.value;
            book.score = parseInt(bookScore.value);
        }
        viewLibrary();
        closeModal(modal);
    });

    deleteForm.addEventListener('click', (event) => {
        const modal = deleteForm.closest('.modal');
        const bookIndex = parseInt(modal.getAttribute('value')) - 1;
        const tmp = [];
        for (let i = 0, j = 0; i < myLibrary.length; i++) 
        {
            if (i !== bookIndex) 
            {
                tmp[j] = myLibrary[i]
                j++;
            }
        }
        myLibrary = tmp; 
        viewLibrary();
        closeModal(modal);
    })