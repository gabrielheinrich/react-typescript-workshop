import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";
import { ThemeContext } from "../../domain/theme";

export const AppHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className="AppHeader">
      <h1 style={{ color: theme.primaryColor }}>Bookmonkey</h1>
      <nav>
        <NavLink to="">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
