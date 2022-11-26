import { useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { ThemeEditor } from "./components/ThemeEditor";
import { useBooks } from "./domain/book";
import { ThemeContext, Theme } from "./domain/theme";

function App() {
  const { books } = useBooks();
  const [primaryColor, setPrimaryColor] = useState("tomato");
  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ThemeEditor />
        <AppHeader />
        <BookList books={books} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
