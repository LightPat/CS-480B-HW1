import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import EndPage from './pages/Soul'

// Dark imports
import DarkLogin from './pages/Dark/DarkLogin'
import DarkGame from './pages/Dark/DarkGame'
import DarkLoginBonus from './pages/Dark/DarkLoginBonus'
import DarkStore from './pages/Dark/DarkStore'

function App() {
  return (
    <div>
      <Router>
        <nav className='Nav-bar'>
          <Link to="/light" className='Nav-element'>Light Version</Link>
          <Link to="/darklogin" className='Nav-element'>Dark Version</Link>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/darklogin" element={<DarkLogin />} />
          <Route path="/darkgame" element={<DarkGame />} />
          <Route path="/darkloginbonus" element={<DarkLoginBonus />} />
          <Route path="/darkstore" element={<DarkStore />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <div className='app'>
      </div>
    </div>
  )
}

export default App