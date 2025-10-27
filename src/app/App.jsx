import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Nav from "../components/nav/Nav";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Blogs from "../pages/blogs/Blogs";
import Service from "../pages/service/Service";
import Login from "../components/login/Login";
import Books from "../pages/books/Books";
import Copyright from "../components/copyright/Copyright";

const App = () => {
  return (
    <Router>
      <Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/service" element={<Service/>} />
          {/* <Route path="/blogs" element={<Blogs/>} /> */}
          <Route path="/books" element={<Books/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </div>
      <Copyright/>
    </Router>
  )
}

export default App