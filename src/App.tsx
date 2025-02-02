
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import Gallery from './pages/gallery'
function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
