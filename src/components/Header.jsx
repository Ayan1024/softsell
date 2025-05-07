import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="sticky top-0 flex items-center justify-between px-6 py-4 shadow bg-slate-200 dark:bg-gray-900 transition-colors duration-300 z-50">
 <div className="text-2xl font-bold text-blue-600 dark:text-white courp">
  <span>
    <img src="/favicon-32x32.png" alt="SoftSell Logo" className="inline-block w-8 h-8 mr-2" />
  </span>
  <span>SoftSell</span>
</div> 

      <div className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
  
        <button
          onClick={handleToggle}
          className="text-xl text-black dark:text-white"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
