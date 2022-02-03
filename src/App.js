import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.js';
import Dark from './pages/Dark.js';
import Light from './pages/Light.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  return (
    <Router className='App'>
      <nav className='Nav-bar'>
        <Link to="/" className='Nav-element'>Home</Link>
        <Link to="/dark" className='Nav-element'>Dark Version</Link>
        <Link to="/light" className='Nav-element'>Light Version</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/light" element={<Light />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
