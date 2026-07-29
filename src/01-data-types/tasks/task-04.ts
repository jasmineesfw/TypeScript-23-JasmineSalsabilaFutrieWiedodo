/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

// Type definition
type Book = {
    bookISBN: string;
    bookTitle: string;
    bookAuthor: string;
    bookPages: number;
    bookCategory: string;
    bookAvailable: boolean;
}

// Book 1
const book1: Book = {
    bookISBN: "ISBN-97860203",
    bookTitle: "Pemrograman Java Dasar",
    bookAuthor: "Andi Pratama",
    bookPages: 312,
    bookCategory: "Programming",
    bookAvailable: true
};
// Book 2
const book2: Book = {
    bookISBN: "ISBN-97862300",
    bookTitle: "Belajar Web Development",
    bookAuthor: "Rina Kurnia",
    bookPages: 444,
    bookCategory: "Programming",
    bookAvailable: false
};
// Book 3
const book3: Book = {
    bookISBN: "ISBN-97897929",
    bookTitle: "Algoritma dan Struktur Data",
    bookAuthor: "Budi Santoso",
    bookPages: 200,
    bookCategory: "Programming",
    bookAvailable: false
};

// Show book data
console.log("=== Book Data ===")
console.log({
    book1,
    book2, 
    book3
});
