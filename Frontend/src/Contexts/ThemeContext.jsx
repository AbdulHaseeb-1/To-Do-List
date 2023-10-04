import { createContext, useContext, useState } from "react";

const Themes = {
  Dark: {
    Background: "transition bg-[rgb(21,21,21)]",
    Text: "transition  text-gray-200",
    Hover:"hover:bg-[rgb(30,30,30)]",
    Label:"Dark",
    Shadow:"transition shadow-stone-800"
},

Light: {
    Background: "transition bg-[#F5F5F5]",
    Text: "transition text-black",
    Hover:" hover:bg-[#DFDFDE]",
    Label:"Light",
    Shadow:"transition shadow-gray-200"

  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState(Themes.Dark);

  return (
    <ThemeContext.Provider value={{Theme, setTheme, Themes}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const AllThemes = () => useContext(ThemeContext);
