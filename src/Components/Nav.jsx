import React from 'react'
import Logo from './Images/logo.svg'
import Button from './Button'


const Nav = () => {
  return (
    <nav>
      <div className="logo"><img src={Logo} alt="Easy bank logo" /></div>
      <div className="nav-links">
        <a href="">Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
        <a href=''>Careers</a>
      </div>
      <div className="btn">
<Button/> </div>
    </nav>
  )
}

export default Nav
