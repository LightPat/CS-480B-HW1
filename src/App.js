import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

import Dark from './pages/Dark/Dark'
import Light from './pages/Light/Light'
import Payment from './pages/Dark/Payment'
import DarkLogin from './pages/Dark/DarkLogin'

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
          <Route path="*" element={<ErrorPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/light" element={<Light />} />
          <Route path="/dark" element={<Dark />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/darklogin" element={<DarkLogin />} />
        </Routes>
      </Router>
      <div className='app'>
      </div>
    </div>
  )
}

export default App