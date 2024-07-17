function createBook(title, author, year) {
    return {
        title: title,
        author: author,
        year: year,
        getSummary: function() {
            return `${this.title} by ${this.author}, published in ${this.year}`;
        }
    };
}

const book = createBook("Harry Potter and the Sorcerer's Stone", 'J.K. Rowling', 1997);
console.log(book.getSummary()); 
