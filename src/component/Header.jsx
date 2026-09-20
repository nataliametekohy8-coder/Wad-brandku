import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="p-4 bg-pink-300 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">BrandKu</h1>
      <button 
        className="md:hidden text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none gap-6 md:gap-8 font-medium text-slate-600`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;