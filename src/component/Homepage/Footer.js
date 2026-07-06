import React from 'react'
import './home.css'


function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_box1'>
                <div className='footer_card'>
                    <div className='footer_logo'>
                        <img src='logo/Websitelogo.svg'alt="logo"/>
                    </div>
                    <div className='logo_description'><p>Empowering the next generation of <br></br>
                        professional relationships through <br></br>
                        technology and trust.</p></div>
                    <div className='footer_icon'></div>
                </div>
                <div  className='footer_card'>
                 <p className='footer_headings'>Quick Links</p>
                 <p>Home</p>
                 <p>For Workers</p>
                 <p> For Employes</p>
                 <p>Success Stories</p>
                </div>
                <div  className='footer_card'>
                 <p className='footer_headings'>Company</p>
                 <p>About Us</p>
                 <p>Careers</p>
                 <p> Press Kit</p>
                 <p>Contact</p>
                </div>
                <div  className='footer_card'>
                 <p className='footer_headings'>Support</p>
                 <p>Help Center</p>
                 <p>Safety Tips</p>
                 <p>Privacy Policy</p>
                 <p>Terms of Service</p>
                </div>
               
               
            </div>
            <hr></hr>
            <div className='footer_box2'>
                <div className='footer_content1'><p>2026 KaryaBandhu. All rights reserved.</p></div>
                <div className='footer_content2'>
                    <p>English</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
