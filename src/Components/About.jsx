import React from 'react'
import Button from './Button'
import ImageMockup from './Images/image-mockups.png'

const About = () => {
  return (
    <section className='banner'>
      <div className="banner-text">
        <h1>Next generation <span>digital banking</span></h1>
        <p> Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
  <Button/>
      </div>
      <div className="banner-img-desktop">
<div className="img"><img src={ImageMockup} alt="Pictures of four phones with screens displaying easy bank app screen" /></div>
      </div>
    </section>
  )
}

export default About
