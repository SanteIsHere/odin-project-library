let myLibrary = ["FooBar"];
const addBookButton = document.getElementById("addBook")
const bookContainer = document.getElementById("books")
const formContainer = document.getElementById("form-cont")
const form = document.getElementById("book_submission")

// console.log(form)

// Hide the form for now
formContainer.style.display = "none"

// Define the "Book" object constructor
function Book(title) {
    this.title = title
}


// Define a function to add a book to the `myLibrary` array
//  from user input

function addToLibrary() {
    /* Prompt the user for a book title,
        create a book card `div` element,
        set its `textContent` attribute to the
        user input and add the card to the `books`
        div
    */
    let title = prompt("What is the book title?")
    let bookCard = document.createElement("div");

    let formValues = await getBookDetails(form);

    console.log(formValues)

    formContainer.style.display = ""
    
    bookCard.classList.add("book_card");
    bookCard.textContent = title;
    
    // Button to remove the book
    let delBook = document.createElement("button");
    delBook.id = "delBook";
    delBook.textContent = "REMOVE BOOK"
    
    bookCard.appendChild(delBook)
    bookContainer?.appendChild(bookCard);

    delBook.addEventListener("click", removeFromLibrary)
}

function removeFromLibrary(node) {
    console.log(bookContainer?.childNodes)
    console.log(node.textContent)
    bookContainer?.removeChild(node)
}

addBookButton?.addEventListener("click", addToLibrary)


// for (let s in myLibrary) {
//     console.log(`${myLibrary[s]}, Index: ${s}`)
// }

// console.log(addBookButton.textContent)