import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { ThemeEditor } from "./components/ThemeEditor";
import { ThemeContext, Theme } from "./domain/theme";

function App() {
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
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
