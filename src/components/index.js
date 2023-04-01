import './Style/style.css'
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Home from './Home'
import Categories from './Categories'
import Politics from './Politics'
import Business from './Business'
import Health from './Health'
import Entertainment from './Entertainment'
import Sports from './Sports'
import About from './About'
import {NewsProvider} from './NewsContext'


function Index() {

  return (
    
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
                <li><NavLink to="newspaper/">HOME</NavLink></li>
                <li><NavLink to="newspaper/categories">CATEGORIES</NavLink></li>
                <li><NavLink to="newspaper/politics">POLITICS</NavLink></li>
                <li><NavLink to="newspaper/business">BUSINESS</NavLink></li>
                <li><NavLink to="newspaper/health">HEALTH</NavLink></li>
                <li><NavLink to="newspaper/entertainment">ENTERTAİNMENT</NavLink></li>
                <li><NavLink to="newspaper/sports">SPORTS</NavLink></li>
                <li><NavLink to="newspaper/about">ABOUT</NavLink></li>
              </ul>
            </nav>
        </div>
        </header>
        <NewsProvider>
          <Routes>
          <Route exact path="newspaper/" element={<Home/>} />
          <Route path="newspaper/categories" element={<Categories/>} />
          <Route path="newspaper/politics" element={<Politics/>} />
          <Route path="newspaper/business" element={<Business/>} />
          <Route path="newspaper/health" element={<Health/>} />
          <Route path="newspaper/entertainment" element={<Entertainment/>} />
          <Route path="newspaper/sports" element={<Sports/>} />
          <Route path="newspaper/about" element={<About/>} />
          </Routes>
        </NewsProvider>
      </Router>
    
  )
}

export default Index