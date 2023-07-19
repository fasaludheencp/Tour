import Navbar from "./Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Package from "./pages/Package"
import Contact from "./pages/Contact"
import Explore from "./pages/Explore"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/explore" element={< Explore/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
     
    </>
  )
}

export default App
