import { useState, useEffect } from 'react';
import './ExtensionCard.css';
import logo from '../../assets/images/logo.svg';
import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg'; 

export default function ExtensionCard() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="card">
      <img src={logo} alt="Logo" />
      <button className="sun" onClick={toggleTheme} aria-label="Toggle Theme">
        <img src={theme === 'dark' ? sun : moon} alt={theme === 'dark' ? 'Sun Icon' : 'Moon Icon'} />
      </button>
    </div>
  );
}
