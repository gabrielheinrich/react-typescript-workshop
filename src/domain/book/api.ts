import { Book } from "./Book";

export const fetchBooks = async () => {
  const response = await fetch("http://localhost:4730/books");
  const data = await response.json();
  return data as Book[];
};

export const fetchBook = async (isbn: string) => {
  const response = await fetch("http://localhost:4730/books/" + isbn);
  const data = await response.json();
  return data as Book;
};

export const updateBook = async (book: Book) => {
  const response = await fetch("http://localhost:4730/books/" + book.isbn, {
    method: "PUT",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok)
    throw new Error("The book couldn't be updated: " + response.statusText);
  const data = await response.json();
  return data as Book;
};
