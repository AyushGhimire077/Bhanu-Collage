import React from 'react'
import './index.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact/Contact'
import Courses from './pages/Cources/Courses'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/HomePage/Home'
import NewsAndEvents from './pages/NewsEvent/NewsEvent'
import Top from './components/Top/Top'
import Testimonials from './pages/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
   <Router>
    <ScrollToTop/>
    <Top/>
    <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/news-events" element={<NewsAndEvents />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonials/>}/>
        </Routes>
      <Footer/>
   </Router>
  )
}

export default App
