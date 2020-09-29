import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/blogdata.json'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {

  const [posts, setPosts]=useState([]);


  useEffect(()=>{
    const posts= blogPost.data
    setPosts(posts);
  }, [posts]);


  return(
    <div className="sidebarContainer" style={{
      width:props.width
    }}>
      <Card style={{marginBottom:"20px", padding:'15px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>About Me</span>
        </div>
        <div className="HarryContainer">
          <img alt="Harry" src={require('../../assets/images/ananyaa.jpeg')}/>
        </div>
        <div className="cardbody">
          <p className="personalBio">Hey, I am Ananya Tripathi. Glad to see you here. Hope you like my poems. :) </p>
        </div>
      </Card>
      
      <Card style={{marginBottom:"20px", padding:'15px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="posts">

          {
            posts.map(post => {
              return(
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className='post'>
                  <h3>{post.blogTitle}</h3>
                  <span>{post.blogdate}</span>
                </div>
                </NavLink>
                
              );
            })
          }

        </div>
      </Card>

    </div>
    
   )
 }

export default Sidebar