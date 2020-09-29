import React from 'react'
import './style.css'


const Header = (props) => {
  return(
    <header className="header">
        <nav className='headerMenu'>
            <a href='#'>Home</a>
            <a href='#'>Contac Us</a>
            <a href='#'>About Us</a>
        </nav>
        <div className="headersocial">
            <a className="socialLink" href="https://www.instagram.com/"><img className="insta" src={require('../../assets/icons/instagram.png')}></img>  </a> 
            <a className="socialLink" href="https://www.facebook.com/"><img className="insta" src={require('../../assets/icons/facebook.png')}></img>  </a>
            <a className="socialLink" href="https://www.linkedin.com/in/ananya-tripathi-477178194/"><img className="insta" src={require('../../assets/icons/linkedin.png')}></img> </a>
            <a className="socialLink" href="https://in.pinterest.com/"><img className="insta" src={require('../../assets/icons/pinterest.png')}></img> </a>
        </div>
    </header>
   )

 }

export default Header