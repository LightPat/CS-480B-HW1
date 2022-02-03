import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.js';
import Dark from './pages/Dark.js';
import Light from './pages/Light.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dark">Dark Version</Link>
        <Link to="/light">Light Version</Link>
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
