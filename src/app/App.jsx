import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Nav from "../components/nav/Nav";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

const App = () => {
  return (
    <Router>
      <Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App