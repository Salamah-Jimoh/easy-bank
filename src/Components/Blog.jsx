import React from 'react'
import ImageCurrency from './Images/image-currency.jpg'
import ImageRestaurant from './Images/image-restaurant.jpg'
import ImagePlane from './Images/image-plane.jpg'
import ImageConfetti from './Images/image-confetti.jpg'
const Blog = () => {
  return (
    <section className='blog' id='blog'>
      <h3 className='ori'>Latest Articles</h3>
      <div className="blog-box">
        <div className="blog1">
            <img src={ImageCurrency} alt="Image of currency" />
           <div className="inner"> <small> By Claire Robinson</small>
            <h3><a href="">Receive money in any currency with no fees</a></h3>
            <p> The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
  </div>
        </div>
        <div className="blog2">
            <img src={ImageRestaurant} alt="Image of food" />
            <div className="inner"> <small>By Wilson Hutton</small>
            <h3><a href="">Treat yourself without worrying about money </a></h3>
            <p> Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
</p></div>
        </div>
        <div className="blog3">
            <img src={ImagePlane} alt="Image of plane" />
            <div className="inner"> <small>By Wilson Hutton</small>
            <h3><a href="">Take your Easybank card wherever you go</a></h3>
            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
</p>
</div>
        </div>
        <div className="blog4">
            <img src={ImageConfetti} alt="Image of confetti" />
            <div className="inner">  <small>By Claire Robinson</small>
            <h3><a href="">Our invite-only Beta accounts are now live!</a></h3>
            <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...
</p></div>
        </div>
      </div>
    </section>
  )
}

export default Blog
