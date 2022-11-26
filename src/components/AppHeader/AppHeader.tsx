import { useContext } from "react";
import { ThemeContext } from "../../domain/theme";

export const AppHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <h1 style={{ color: theme.primaryColor }}>Bookmonkey</h1>
    </header>
  );
};
