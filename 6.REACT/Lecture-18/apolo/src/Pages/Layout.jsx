import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Pages from './Pages'
import Faq from './Faq'
import Navbar from '../Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default Layout
