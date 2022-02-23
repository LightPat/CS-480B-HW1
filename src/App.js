import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dark from './pages/Dark.js';
import Light from './pages/Light.js';
import Soul from './pages/Soul.js';
import ErrorPage from './pages/ErrorPage.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';

import LightCart from './pages/LightCart.js';
// import DarkCart from './pages/DarkCart.js';

function App() {
  return (
    <Router>
      <nav className='Nav-bar'>
        <Link to="/light" className='Nav-element'>Light Version</Link>
        <Link to="/dark" className='Nav-element'>Dark Version</Link>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/light" element={<Light />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/lightcart" element={<LightCart />} />
        {/* <Route path="/darkcart" element={<DarkCart />} /> */}
        <Route path="/end" element={<Soul />}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App