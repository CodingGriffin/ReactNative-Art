import React, { createContext, useState, useContext } from 'react';

// Define your themes
const lightTheme = {
  textColor: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
};

// Create the theme context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Create a theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Select the current theme based on isDarkMode
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};