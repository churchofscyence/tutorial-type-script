console.log("<------------------------- Index Properties ------------------------->");

type Book = {
    title: string;
    author: string;
    year: number;
};

type PropertyType = Book["title"];

const book: Book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
};

const title: PropertyType = book["title"];

// Output: The Hitchhiker's Guide to the Galaxy
console.log(title);


