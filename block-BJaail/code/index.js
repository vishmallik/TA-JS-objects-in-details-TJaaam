class Book {
  constructor(title, author, img) {
    this.title = title;
    this.author = author;
    this.img = img;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}
class BookList {
  constructor(books = JSON.parse(localStorage.getItem("books")) || []) {
    this.books = books;
  }
  add(title = "", author = "", img = "") {
    let newBook = new Book(title, author, img);
    this.books.push(newBook);
    localStorage.setItem("books", JSON.stringify(this.books));
    this.createUI();
  }
  handleDelete(id) {
    let index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
    this.createUI();
  }
  createUI() {
    root.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let div = document.createElement("div");
      div.classList.add("img-container");
      let img = document.createElement("img");
      img.src = book.img;
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.innerText = book.isRead ? `Completed` : `Mark as Read`;
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });

      let i = document.createElement("i");
      i.classList.add("fa-regular");
      i.classList.add("fa-circle-xmark");
      i.addEventListener("click", this.handleDelete.bind(this, book.id));
      div.append(img);
      li.append(div, h2, p, button, i);
      root.append(li);
    });
  }
}

let library = new BookList();

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let title = form.elements.title.value;
  let author = form.elements.author.value;
  let image = form.elements.img.value;
  library.add(title, author, image);
  form.elements.title.value = "";
  form.elements.author.value = "";
  form.elements.img.value = "";
}

let root = document.querySelector("ul");
