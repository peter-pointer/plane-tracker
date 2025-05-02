
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Home from '../src/components/Home.jsx';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </Router>
  )
}

export default App
