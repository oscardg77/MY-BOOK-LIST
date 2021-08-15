

// Tu código// La clase Book
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// Código a copiar
const defaultBooks = [
    {
        title: 'Book 1',
        author: 'Brad Traversy',
        isbn: '12345'
    },
    {
        title: 'Book 2',
        author: 'Mehul Mohan',
        isbn: '6789'
    }
]

// Tu código
class UI {
    static displayBooks() {
        defaultBooks.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList() {
        const list = document.getElementById('book-list')// get the #book-list DOM node here
        const row = document.createElement('tr') // create a TR row element here (document.createElement)
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `
        list.appendChild(row)
       
    }
}
    UI.displayBooks() 
   

  // Event: Display Books
UI.displayBooks()

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', addABook, false)

function addABook(e) {
	// prevent actual submission
	e.preventDefault()

	// Capturar los valores del Form
    const author = document.getElementById('author').value
	const title = document.getElementById('title').value
	const isbn = document.getElementById('isbn').value

	// Crear un nuevo objeto book
	const book = new Book(title, author, isbn)

	// Añadir el objeto book creado a UI (mostrarlo en HTML)
    UI.addBookToList(book)

    UI.clearFields()
    const author = document.getElementById('author')
	const title = document.getElementById('title')
	const isbn = document.getElementById('isbn')
    

 }