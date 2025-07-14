// Array to store all books
var myLibrary = [];

// Constructor for Book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'Yes' : 'No';
    
    this.id = crypto.randomUUID(); // Creates a unique id for each book
    // To return info of the book
    this.info = function(){
        return this.id + '.' + this.title + ' by ' 
            + this.author + ', ' + this.pages + ' pages, ' 
            + this.read;
    }
}

// Prototype function for Book
Book.prototype.changeReadStatus = function() {
    // Toggle read based on current value
    this.read = this.read === 'Yes' ? 'No' : 'Yes'
}

// Function to get book info from user and create the book object
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

// Function to remove book from the library
function removeBookFromLibrary(id){
    myLibrary = myLibrary.filter(book => book.id !== id);
    displayAllBooks();
}

addBookToLibrary('A', 'B', 'C', true);
addBookToLibrary('New', 'Book', 'Chaaa', false);
addBookToLibrary('Aasdkjasbkd', 'Bpasdjoas', 'asdasd', true);
addBookToLibrary('Akahsdjkasd', 'Bkjasdjkas', 'Casdhasd', false);
addBookToLibrary('A', 'B', 'C', true);
addBookToLibrary('New', 'Book', 'Chaaa', false);
addBookToLibrary('Aasdkjasbkd', 'Bpasdjoas', 'asdasd', true);
addBookToLibrary('Akahsdjkasd', 'Bkjasdjkas', 'Casdhasd', false);
displayAllBooks();

// Display all the books in the library
function displayAllBooks(){
    document.querySelector('#container').innerHTML = '';
    myLibrary.forEach(book => {
        const container = document.querySelector('#container');
        const card = document.createElement('div');

        const cardTitle = document.createElement('div');
        cardTitle.textContent = book.title;
        cardTitle.classList.toggle('card-items');
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement('div');
        cardAuthor.textContent = book.author;
        cardAuthor.classList.toggle('card-items');
        card.appendChild(cardAuthor);

        const cardPages = document.createElement('div');
        cardPages.textContent = book.pages;
        cardPages.classList.toggle('card-items');
        card.appendChild(cardPages);

        const cardRead = document.createElement('div');
        cardRead.textContent = book.read;
        cardRead.classList.toggle('card-items');
        card.appendChild(cardRead);

        const readButton = document.createElement('button');
        readButton.textContent = 'Change Read Status';
        // Change read status on button click
        readButton.addEventListener('click', () => {
            book.changeReadStatus();
            displayAllBooks();
        })

        card.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        cardRead.classList.toggle('card-items','remove-button');
        removeButton.addEventListener('click', () => {
            // Pass id of the book that is to be removed
            removeBookFromLibrary(book.id);
        })

        card.appendChild(removeButton);

        card.classList.toggle('card');
        container.appendChild(card);
    })
}

// Show dialog on button click
const dialog = document.querySelector('#dialog');
const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
    dialog.showModal();
})

// Close dialog on button click
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
})

// Handle the data after form submission
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    addBookToLibrary(title, author, pages, read);

    dialog.close();
    displayAllBooks();
})
