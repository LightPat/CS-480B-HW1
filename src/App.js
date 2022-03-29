import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Dark from './pages/Dark/Dark'
import DarkGame from './pages/Dark/DarkGame'

function App() {
  return (
    <div>
      <Router>
        <nav className='Nav-bar'>
          <Link to="/light" className='Nav-element'>Light Version</Link>
          <Link to="/dark" className='Nav-element'>Dark Version</Link>
        </nav>

        <Routes>
          <Route path="/" />
          {/* <Route path="/light" element={<Light />} /> */}
          <Route path="/dark" element={<Dark />} />
          <Route path="/darkgame" element={<DarkGame />} />
          {/* <Route path="/lightcart" element={<LightCart />} /> */}
          {/* <Route path="/end" element={<Soul />}/> */}
          {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
      <div className='app'>
      </div>
    </div>
  )
}

export default App