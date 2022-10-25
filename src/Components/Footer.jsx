import React from 'react'
import Logo from './Images/logo.svg'
import FacebookIcon from './Images/icon-facebook.svg'
import YoutubeIcon from './Images/icon-youtube.svg'
import TwitterIcon from './Images/icon-twitter.svg'
import PinterestIcon from './Images/icon-pinterest.svg'
import InstagramIcon from './Images/icon-instagram.svg'
import Button from './Button'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="logos">
        <div className="main-logo">
            <img src={Logo} alt="Logo" />
        </div>
         <div className="socials">
         
         <a href=""> <img src={FacebookIcon} alt="Facebook"/></a>
           <a href=""> <img src={YoutubeIcon} alt="Youtube"/></a>
           <a href=""> <img src={TwitterIcon} alt="Twitter" /></a>
           <a href=""><img src={PinterestIcon} alt="Pintrest" /></a>
           <a href=""> <img src={InstagramIcon} alt="Instagram" /></a>
         </div>
      </div>
      <div className="first-menu">
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
      <div className="second-menu">
        <a href="">Careers</a>
        <a href="">Support</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="copy">
        <div className="button">
            <Button/>
        </div>
        <p>&copy; Easybank All Rights Reserved</p>
        <span class= 'attry'>Developed by <a href="">Salamah</a> </span>
      </div>
      
    </footer>
  )
}

export default Footer
