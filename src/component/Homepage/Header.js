import React from 'react'

function Header() {
  return (
    <div className='header_container'>
        <div className='box1'>
            <div className='content1'>
                <p>Find Work.<br></br>Hire
              <span className='green_text'> Trusted <br></br> Workers</span>  </p>
                
            </div>
            <div className='content2'>
                <p>The bridge between skilled professionals and premium <br></br> employers. We facilitate secure, transparent, and high- <br></br>impact connections in the modern workspace.</p>
            </div>
            <div className='content3'>
                <button className='header_btn1'>I`am a Worker</button>
                <button className='header_btn2'>I`am an Employer</button>
            </div>
        </div>
        <div className='box2'>
            <div className='header_img'>
                <img src='homepage_image/header_image.png' alt="headerImage"/>
            </div>
        </div>
      
    </div>
  )
}

export default Header
