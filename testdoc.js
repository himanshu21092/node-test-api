/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.printBookName = () => {
        return this.title;
    }
}

const book1 = new Book("Norwegian Wood", "Hruki Murakami");
console.log(printBookName(book1));