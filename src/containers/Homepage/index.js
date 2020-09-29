import React from 'react'
import './style.css'
import Home from '../Home'
import Homeside from '../Homeside'

const Homepage = (props) => {
  return(
    <div className="homecontainer">
    <Home></Home>
    <Homeside></Homeside>
    </div>
   )

 }

export default Homepage