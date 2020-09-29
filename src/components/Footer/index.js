import React from 'react'
import Card from '../UI/Card'
import './style.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <Card style={{padding:'15px', boxSizing: 'border-box'}}>
      <div className="footsocial">
            <a className="socialLink" href="https://www.instagram.com/_ananya.tripathi/"><img className="iconfoot" src={require('../../assets/icons/instafoot.png')}></img>  </a> 
            <a className="socialLink" href="https://www.linkedin.com/in/ananya-tripathi-477178194/"><img className="iconfoot" src={require('../../assets/icons/linkedinfoot.png')}></img> </a>
            <a className="socialLink" href="https://in.pinterest.com/"><img className="iconfoot" src={require('../../assets/icons/pinfoot.png')}></img> </a>
        </div>
        <div className="contact">
          <h5>Email : ananyatri77@gmail.com | Phone Number : 8840627029</h5>
          
        </div>
    </Card>
   )

 }

export default Footer