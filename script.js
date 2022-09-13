const body = document.body;
const libraryDiv = document.querySelector('.library');
const addNewBook = document.querySelector('.addNewBook');
const formDiv = document.querySelector('.formdiv');
const form = document.querySelector('form');
const cross = document.querySelector('.cross')
let library = []
const header = document.querySelector('header');
// detail fatch
const bookName = document.querySelector('bookname');
const authorName = document.querySelector('authorname');
const description = document.querySelector('.Description');
const pages = document.querySelector('.pages');
const bookEdition = document.querySelector('.bookedition');
const submit = document.querySelector('.submit');



// form pop-up start
addNewBook.addEventListener('click' , (e) => {
    e.preventDefault();
    form.classList.add('formshow');
    console.log('button clicked');
})

cross.addEventListener('click',() => {
    form.classList.remove('formshow');
})

// form pop-up end

// function Book(name,author,pages,) {
//     this.name = ;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

// creating new object
const newBook = document.createElement('div');
newBook.classList.add('newBook');
library.push(newBook)
libraryDiv.appendChild(newBook)
console.log(library)


