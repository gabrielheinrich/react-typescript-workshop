import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { useBooks } from "./domain/book";

function App() {
  const { books } = useBooks();

  return (
    <div className="App">
      <AppHeader />
      <BookList books={books} />
    </div>
  );
}

export default App;
