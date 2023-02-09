import './Style/style.css'
import React from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Home from './Home'
import Categories from './Categories'
import Politics from './Politics'
import Business from './Business'
import Health from './Health'
import Entertainment from './Entertainment'
import Sports from './Sports'
import About from './About'


function Index() {
  return (
    <div>
      <Router>
        <header>
        <div className="header-container">
          <div className="title">
            <p>Bedirhan Harputluoğlu</p>
            <form>
              <div className="input-area">
                <input type="text" placeholder="Search" />
              </div>
              <button className="btn" type="submit">Ara</button>
            </form>
          </div>
        
            <nav className="navbar">
              <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/categories">CATEGORIES</NavLink></li>
                <li><NavLink to="/politics">POLITICS</NavLink></li>
                <li><NavLink to="/business">BUSINESS</NavLink></li>
                <li><NavLink to="/health">HEALTH</NavLink></li>
                <li><NavLink to="/entertainment">ENTERTAİNMENT</NavLink></li>
                <li><NavLink to="/sports">SPORTS</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
              </ul>
            </nav>
        </div>
        </header>

          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/politics" element={<Politics/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/health" element={<Health/>} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/about" element={<About/>} />
          </Routes>
        
      </Router>
    </div>
  )
}

export default Index