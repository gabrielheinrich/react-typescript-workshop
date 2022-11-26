import { Book } from "./Book";

export const fetchBooks = async () => {
  const response = await fetch("http://localhost:4730/books");
  const data = await response.json();
  return data as Book[];
};
