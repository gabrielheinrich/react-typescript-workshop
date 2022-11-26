import { useState, useEffect } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { Book, fetchBooks } from "./domain/book";

function App() {
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

  return (
    <div className="App">
      <AppHeader />
      <BookList books={books} />
    </div>
  );
}

export default App;
