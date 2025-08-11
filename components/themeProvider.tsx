"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    Primary: string;
    Secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    Primary: "#f0f0f0",
    Secondary: "#202020",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
