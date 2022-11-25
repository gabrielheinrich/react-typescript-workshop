import React from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { ExampleBook } from "./components/ExampleBook";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ExampleBook />
    </div>
  );
}

export default App;
