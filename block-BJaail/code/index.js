class BookList {
  constructor(root, book = []) {
    this.book = book;
    this.root = root;
  }
  add(name, author, isbn) {
    let newBook = new Book(name, author, isbn);
    this.book.push(newBook);
    this.createUI();
    return this.book.length;
  }
  handleDelete(id) {
    let index = this.book.findIndex((book) => (book.id = id));
    console.log(index);
    this.book.splice(index, 1);
    this.createUI();
    return this.book.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.book.forEach((book) => {
      let ui = book.createUI();
      console.log(ui.querySelector("span"));
      ui.querySelector("span").addEventListener(
        "focus",
        this.handleDelete.bind(this, book.id)
      );
      console.dir(ui);
      console.log(book.id);
      this.root.append(book.createUI());
    });
  }
}
class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.id = `id-${Date.now()}`;
    this.isRead = false;
  }
  createUI() {
    let tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
      let arr = [this.name, this.author, this.isbn];
      let td = document.createElement("td");
      td.class = `id-${i}`;
      td.innerText = arr[i];
      tr.append(td);
    }
    tr.lastElementChild.innerHTML = "<span>❌</span>";
    return tr;
  }
}
let myBook = new BookList(document.querySelector("tbody"));
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let book = {};
  book.title = form.elements.title.value;
  book.author = form.elements.author.value;
  book.isbn = form.elements.isbn.value;
  myBook.add(book.title, book.author, book.isbn);
}
