// Array to store all books
const myLibrary = [];

// Constructor for Book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); // Creates a unique id for each book
    // To return info of the book
    this.info = function(){
        return this.id + '.' + this.title + ' by ' 
            + this.author + ', ' + this.pages + ' pages, ' 
            + (read?'read':'not read yet');
    }
}

// Function to get book info from user and create the book object
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('A', 'B', 'C', true);
addBookToLibrary('New', 'Book', 'Chaaa', true);
addBookToLibrary('Aasdkjasbkd', 'Bpasdjoas', 'asdasd', true);
addBookToLibrary('Akahsdjkasd', 'Bkjasdjkas', 'Casdhasd', true);
addBookToLibrary('A', 'B', 'C', true);
addBookToLibrary('New', 'Book', 'Chaaa', true);
addBookToLibrary('Aasdkjasbkd', 'Bpasdjoas', 'asdasd', true);
addBookToLibrary('Akahsdjkasd', 'Bkjasdjkas', 'Casdhasd', true);
displayAllBooks();

// Display all the books in the library
function displayAllBooks(){
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

        card.classList.toggle('card');
        container.appendChild(card);
    })
}

const dialog = document.querySelector('#dialog');
const addButton = document.querySelector('.add');
addButton.addEventListener('click', () =>{
    dialog.showModal();
})

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () =>{
    dialog.close();
})