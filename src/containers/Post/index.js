import React from 'react'
import './style.css'
import Blogpost from '../../components/Blogpost'
import Sidebar from '../../components/Sidebar'


const Post = (props) => {

  console.log(props);

  return(
      <section className="container">
        <Blogpost {...props}></Blogpost>
        <Sidebar></Sidebar>
    
    </section>
   )

 }

export default Post