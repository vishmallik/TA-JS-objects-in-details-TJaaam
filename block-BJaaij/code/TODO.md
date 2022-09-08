## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

```js
class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class BookList {
  constructor(booksArray, index) {
    this.allBooks = booksArray;
    this.readBook = index;
  }
  add(book) {
    return this.allBooks.concat(book);
  }
  getCurrentBook() {
    return this.allBooks[this.readBook];
  }
  getNextBook() {
    return this.allBooks[this.readBook + 1];
  }
  getPrevBook() {
    return this.allBooks[this.readBook - 1];
  }
  changeCurrentBook(newIndex) {
    this.readBook = newIndex;
  }
}

let hungerGames = new Book("The Hunger Games", "Fantasy", "Suzanne Collins");

let harryPotter = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "Fantasy",
  " J.K. Rowling"
);

let twilight = new Book("Twilight", "Romance", "Stephenie Meyer");

let diaryOfYoungGirl = new Book(
  "The Diary of a Young Girl",
  "Biography",
  "Anne Frank"
);
let mockingBird = new Book("To Kill a Mockingbird", "Fiction", "Harper Lee");

let list1 = new BookList(
  [hungerGames, harryPotter, twilight, diaryOfYoungGirl, mockingBird],
  2
);
console.group(`Testing Book Class`);
console.log(hungerGames.title);
console.log(harryPotter.category);
console.log(twilight.author);
console.log(mockingBird.isRead);
console.log(hungerGames.finishedDate);

mockingBird.markBookAsRead();

console.log(mockingBird.isRead);
console.log(mockingBird.finishedDate);
console.groupEnd();

console.group(`Tesing BookList Class`);
console.log(list1.allBooks);
console.log(list1.readBook);

list1.add([
  "The Lion, the Witch and the Wardrobe",
  "The Host",
  "The Da Vinci Code",
]);

console.log(list1.allBooks);
console.log(list1.getCurrentBook());
console.log(list1.getNextBook());
console.log(list1.getPrevBook());

list1.changeCurrentBook(5);

console.log(list1.readBook);
console.log(list1.getCurrentBook());
console.groupEnd();
```
