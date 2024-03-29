const body = document.body;
const libraryDiv = document.querySelector('.library');
const addNewBook = document.querySelector('.addNewBook');
const form = document.querySelector('form');
const cross = document.querySelector('.cross')
const header = document.querySelector('header');


// detail fatch


let library = []
const bookName = document.querySelector('.bookname');
const authorName = document.querySelector('.authorname');
const description = document.querySelector('.Description');
const pages = document.querySelector('.pages');
const bookEdition = document.querySelector('.bookedition');
const add = document.querySelector('.add');

function Book(bookName,authorName,description,pages,bookEdition) {
    this.name = bookName;
    this.author = authorName;
    this.description = description;
    this.pages = pages;
    this.edition = bookEdition;
  }

// form pop-up start
addNewBook.addEventListener('click' , (e) => {
    e.preventDefault();
    form.classList.add('formshow');
    addNewBook.disabled = true;
    addNewBook.classList.add('showcross')
})

cross.addEventListener('click',() => {
    form.classList.remove('formshow');
    addNewBook.disabled = false;
    addNewBook.classList.remove('showcross')

})
// form pop-up end

// creating new object & adding to the library


add.addEventListener('click',(e) => {

    e.preventDefault()
    let book = new Book(bookName.value,authorName.value,description.value,pages.value,bookEdition.value);
    library.push(book);
    console.log(library);
    form.classList.remove('formshow');
    addNewBook.disabled = false;
    addNewBook.classList.remove('showcross')
    console.log(book);

    let book_serialized = JSON.stringify(book);
    localStorage.setItem('book', book_serialized);


     // to fetch data from library array and display into book card.

     CardBook()

})



function CardBook(){

    let getInfoFromLocalStorage = JSON.parse(localStorage.getItem('book'));


    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    libraryDiv.appendChild(bookCard);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    bookCard.appendChild(cardHeader);

    let cardHeaderLeft = document.createElement('div');
    cardHeaderLeft.classList.add('cardHeaderLeft');
    cardHeader.appendChild(cardHeaderLeft);

    let bookTitle = document.createElement('p');
    bookTitle.classList.add('bookTitle');
    cardHeaderLeft.appendChild(bookTitle);
    bookTitle.innerText = `Name : ${getInfoFromLocalStorage.name}`;


    let author = document.createElement('p');
    author.classList.add('author');
    cardHeaderLeft.appendChild(author); 
    author.innerText = `Author : ${getInfoFromLocalStorage.author}`;

    let cardHeaderRight = document.createElement('div');
    cardHeaderRight.classList.add('cardHeaderRight');
    cardHeader.appendChild(cardHeaderRight);

    let Delete = document.createElement('img');
    Delete.classList.add('delete');
    Delete.setAttribute('src','./Resources/Images/delete-variant.svg');
    Delete.setAttribute('alt', 'nature');
    Delete.setAttribute('height', 30);
    Delete.setAttribute('width', 30);
    cardHeaderRight.appendChild(Delete);


    Delete.addEventListener('click', (e) => {
        e.preventDefault();
        library.pop(this.book);
        console.log(library);
        bookCard.remove();
        localStorage.removeItem('book');
        console.log(localStorage);

    })




    // other details regarding book

    let otherDetails = document.createElement('div');
    otherDetails.classList.add('otherDetails');
    bookCard.appendChild(otherDetails);

    let descriptionBox = document.createElement('div');
    descriptionBox.classList.add('descriptionBox');
    otherDetails.appendChild(descriptionBox);

    
    let descriptionText = document.createElement('p');
    descriptionText.classList.add('descriptionText');
    descriptionBox.appendChild(descriptionText);
    descriptionText.innerText = `Description : ${getInfoFromLocalStorage.description}`
 

    let totalPages = document.createElement('p');
    totalPages.classList.add('totalPages');
    otherDetails.appendChild(totalPages); 
    totalPages.innerText = `Pages : ${getInfoFromLocalStorage.pages}`


    let editionOfBook = document.createElement('p');
    editionOfBook.classList.add('editionOfBook');
    otherDetails.appendChild(editionOfBook); 
    editionOfBook.innerText = `Edition : ${getInfoFromLocalStorage.edition}`


}



if(localStorage.getItem('book') !== null){
    CardBook();
}