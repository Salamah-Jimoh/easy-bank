import React from 'react'
import OnlineIcon from './Images/icon-online.svg'
import BudgetIcon from './Images/icon-budgeting.svg'
import OnBoardingIcon from './Images/icon-onboarding.svg'
import APIICon from './Images/icon-api.svg'
const Services = () => {
  return (
    <section className='services' id='about'>
      <div className="services-text">
       <h2> Why choose Easybank?</h2>
       <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
      </div>
      <div className="services-box">
        <div className="box1">
          <div className="services-img"><img src={OnlineIcon} alt="Online Icon" /></div>
          <h3> Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
        </div>
        <div className="box2">
        <div className="services-img"><img src={BudgetIcon} alt="Budjet Icon" /></div>
          <h3> Simple Budgeting</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
        </div>
        <div className="box3">
        <div className="services-img"><img src={OnBoardingIcon} alt="Onboarding Icon" /></div>
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
                        </p>
        </div>
        <div className="box4">
        <div className="services-img"><img src={APIICon} alt="API Icon" /></div>
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
