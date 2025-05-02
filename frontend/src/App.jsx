import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css'
import Home from '../src/components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import 'leaflet/dist/leaflet.css';


function App() {

  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </Router>
    </div>
  )
}

export default App
