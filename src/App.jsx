
import './App.css'
import { useState } from 'react'
import Logo from './Components/Images/logo.svg'
import MenuOpen from './Components/Images/icon-hamburger.svg'
import Button from './Components/Button'
import About from './Components/About'
import Services from './Components/Services'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import{BrowserRouter} from 'react-router-dom'
import {HashLink, NavHashLink} from 'react-router-hash-link'
function App() {
  const [showMenu, setShowMenu] = useState(false);
  let close;
  let navMobile;
  if(showMenu){
    navMobile =<div class="nav-links-mobile">
    <ul>
    <li><HashLink to ="#" smooth className='linkk' >Home</HashLink></li> 
    <li><HashLink to ="#about" smooth className='linkk'>About</HashLink></li> 
    <li><HashLink to = "#footer" smooth className='linkk'>Contact</HashLink></li> 
    <li> <HashLink to = "#blog" smooth className='linkk'>Blog</HashLink></li> 
    <li><HashLink to ="#" smooth className='linkk'>Careers</HashLink></li> 
    </ul>
    </div>
    close =    <p class="close" onClick={()=>{
      setShowMenu(false)

    }}>X</p>
  }

  return (
    <BrowserRouter>
    <nav>
      <div className="navbar">
    <div className="logo"><img src={Logo} alt="Easy bank logo" /></div>
    <div className="nav-links-destop">
      <ul>
     <li><NavHashLink to ="/" smooth className='link'activeClassName='active'>Home</NavHashLink></li> 
     <li><NavHashLink to ="about#about" smooth className='link' activeClassName='active'>About</NavHashLink></li> 
     <li><NavHashLink to = "footer#footer" smooth className='link' activeClassName='active'>Contact</NavHashLink></li> 
     <li> <NavHashLink to = "/blog#blog" smooth className='link' activeClassName='active'>Blog</NavHashLink></li> 
      <li><HashLink to ="#" smooth className='link' >Careers</HashLink></li> 
      </ul>
    </div>
    <div className="btn btn-hide"><Button/> </div>
    <div className="mobile-menu">
      <img className="hamburger" src={MenuOpen} style={{
        display:showMenu ? 'none' :''
      }} onClick={()=>{
        setShowMenu(!showMenu)
      }}></img>
       {close}
    </div>
    </div>
    {navMobile}
    <About/>
    <Services/>
    <Blog/>
    <Footer/>
  </nav>
  </BrowserRouter>

  )
}

export default App
