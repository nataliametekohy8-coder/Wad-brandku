import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-pink-300 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">BrandKu</h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;