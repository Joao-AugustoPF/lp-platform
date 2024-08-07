import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="fixed right-1 md:right-2 top-32 transform -translate-y-1/2 z-50">
      <button
        onClick={toggleTheme}
        className="relative w-8 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex justify-center transition-all duration-500 ease-in-out"
      >
        <div
          className={`absolute w-8 h-8 flex justify-center items-center rounded-full transform transition-transform duration-500 ease-in-out ${
            isDarkMode ? 'translate-y-0' : 'translate-y-4'
          }`}
        >
          {isDarkMode ? (
            <FaMoon className="text-yellow-400 w-4 h-4" />
          ) : (
            <FaSun className="text-yellow-400 w-4 h-4" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
