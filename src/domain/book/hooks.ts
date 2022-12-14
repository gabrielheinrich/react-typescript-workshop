import { useState, useEffect } from "react";
import { Book } from "./Book";
import { fetchBooks, fetchBook } from "./api";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    // Possibility 1: local async function that gets immediately called
    async function fetchData() {
      setBooks(await fetchBooks());
    }
    fetchData();

    // Possibility 2: respond to promise resolution with .then handler
    // fetchBooks().then(setBooks);
  }, []);

  return {
    books,
  };
};

export const useBook = (isbn: string) => {
  const [book, setBook] = useState<Book>();
  useEffect(() => {
    setBook(undefined);
    fetchBook(isbn).then(setBook);
  }, [isbn]);

  return {
    book,
  };
};
