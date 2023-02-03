import React from 'react'
// import Logo from "../images/csm logo.png"
import Address from "../images/maps-and-flags.png"
import PhoneNumber from "../images/phone-call.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Email from "../images/email.png"

const Footer = () => {
  return (
    <footer>
        <div className='csm-info'>

          <div className='contact-info'>
            <p>Contact:</p>

            <div className='address'>
              <img src={Address} alt='address icon'/>
              <span>
                <a target='blank' href ='https://www.google.com/maps/place/Bloc+reziden%C8%9Bial/@47.6362581,26.2314998,16.74z/data=!4m5!3m4!1s0x0:0x1d258296f3ead618!8m2!3d47.6353756!4d26.2341519'>
                  Bulevardul 1 Decembrie 1918 nr. 7, 
                  <br/>Suceava, Romania
                </a>
              </span>
            </div>

            <div className='phone-number'>
              <img src={PhoneNumber} alt='phone number icon'/>
              <span>+40748382575</span>
            </div>

            <div className='email'>
              <img src={Email} alt='email icon'/>
              <span>csm.suceava@sport.gov.ro</span>
            </div>

          </div>
          <div className='social-media'>
            <p>Social Media:</p>

            <div className='facebook'>
              <img src={Facebook} alt='facebook icon'/>
              <span><a target='blank' href='https://www.facebook.com/profile.php?id=100057069055225'>Our Facebook Page</a></span>
            </div>

            <div className='instagram'>
              <img src={Instagram} alt='instagram icon'/>
              <span><a target='blank' href='https://instagram.com/csmsuceavavolei?igshid=YmMyMTA2M2Y='>Our Instagram Page</a></span>
            </div>

          </div>
        </div>
        <div className='author-info'>
          <p>© Made by the Soft Serve team.</p>
        </div>
     {/* <img src={Logo} alt=""/> */}
     {/* <div className='all'>
        <div className='main-footer-info'>
        <div className='contact-info'>
        <span>Contact information:</span>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
          <div className='address'>
          <img src={Address} alt='address icon'/>
          <span><a href ='https://www.google.com/maps/place/Bloc+reziden%C8%9Bial/@47.6362581,26.2314998,16.74z/data=!4m5!3m4!1s0x0:0x1d258296f3ead618!8m2!3d47.6353756!4d26.2341519'>
              Bulevardul 1 Decembrie 1918 nr. 7, 
              <br/>Suceava, Romania
            </a></span>
          </div>
          <div className='phone-number'>
            <img src={PhoneNumber} alt='phone number icon'/>
            <span>+40748382575</span>
          </div>
        </div>
        <div className='social-media'>
        <span>Social Media:</span>
          <div className='facebook'>
            <img src={Facebook} alt='facebook icon'/>
            <span><a href='https://www.facebook.com/profile.php?id=100057069055225'>Our Facebook Page</a></span>
          </div>
          <div className='instagram'>
            <img src={Instagram} alt='instagram icon'/>
            <span><a href='https://instagram.com/csmsuceavavolei?igshid=YmMyMTA2M2Y='>Our Instagram Page</a></span>
          </div>
        </div>
        </div>
        <div className='author-info'>
          <span>© Made by the Soft Serve team.</span>
        </div>
      </div> */}
    </footer>
  )
}
export default Footer