import { useContext } from "react";
import { ThemeContext } from "../../domain/theme";

export const ThemeEditor = () => {
  const theme = useContext(ThemeContext);

  const colorChoices = [
    "crimson",
    "tomato",
    "chocolate",
    "darkorange",
    "olivedrab",
    "teal",
    "dodgerblue",
    "steelblue",
  ];
  return (
    <div>
      {colorChoices.map((color) => (
        <button
          style={{
            backgroundColor: color,
            height: "30px",
            width: "30px",
            border: "none",
          }}
          onClick={() => theme.setPrimaryColor(color)}
          key={color}
        ></button>
      ))}
    </div>
  );
};
