import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

// Dark imports
// import DarkLogin from './pages/Dark/DarkLogin'
// import DarkGame from './pages/Dark/DarkGame'
// import DarkLoginBonus from './pages/Dark/DarkLoginBonus'
// import DarkStore from './pages/Dark/DarkStore'

// Light imports
// import LightLogin from './pages/Light/LightLogin'
// import LightGame from './pages/Light/LightGame'
// import LightLoginBonus from './pages/Light/LightLoginBonus'
// import LightStore from './pages/Light/LightStore'
import Light from './pages/Light/Light'

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
          <Route path="*" element={<ErrorPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/light" element={<Light />} />

          {/* <Route path="/lightlogin" element={<LightLogin />} />
          <Route path="/lightgame" element={<LightGame />} />
          <Route path="/lightloginbonus" element={<LightLoginBonus />} />
          <Route path="/lightstore" element={<LightStore />} />

          <Route path="/darklogin" element={<DarkLogin />} />
          <Route path="/darkgame" element={<DarkGame />} />
          <Route path="/darkloginbonus" element={<DarkLoginBonus />} />
          <Route path="/darkstore" element={<DarkStore />} /> */}
        </Routes>
      </Router>
      <div className='app'>
      </div>
    </div>
  )
}

export default App