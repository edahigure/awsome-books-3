
const contact = document.querySelector('#contact');
const addBook = document.querySelector('.input-section');
const bookList = document.querySelector('.booksList');
const colorCon = document.querySelector('#colorCon');
const colorAdd = document.querySelector('#colorAdd');
const colorBooks = document.querySelector('#colorBooks');

export function initData(){
    
    colorCon.addEventListener('click', showContact);
    colorAdd.addEventListener('click', showAddBook);
    colorBooks.addEventListener('click', showBooks);    
        
}


function showContact() {
  contact.style.display = 'flex';
  addBook.style.display = 'none';
  bookList.style.display = 'none';
  colorCon.style.color = 'blue';
  colorAdd.style.color = 'black';
  colorBooks.style.color = 'black';
}

function showAddBook() {
  contact.style.display = 'none';
  addBook.style.display = 'flex';
  bookList.style.display = 'none';
  colorAdd.style.color = 'blue';
  colorCon.style.color = 'black';
  colorBooks.style.color = 'black';
}


function showBooks() {
  contact.style.display = 'none';
  addBook.style.display = 'none';
  bookList.style.display = 'flex';
  colorBooks.style.color = 'blue';
  colorCon.style.color = 'black';
  colorAdd.style.color = 'black';
}


