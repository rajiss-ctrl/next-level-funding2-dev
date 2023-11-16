// context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Use a function to get the initial theme to support server-side rendering
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      // On the client side, use localStorage
      const storedTheme = localStorage.getItem('theme');
      return storedTheme || 'light';
    } else {
      // On the server side, use a default theme (e.g., 'light')
      return 'light';
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Set initial theme on the client side
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
