import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;