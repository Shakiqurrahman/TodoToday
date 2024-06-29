import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="py-2 px-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
    >
      {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default DarkModeBtn;
