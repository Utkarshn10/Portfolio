import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/blogdata.json'


const Blogpost = (props) => {

  const [post, setPost]=useState({
    id:"",
    blogTitle:"",
    blogCategory:"",
    blogImage:""
  });
  const [postId, setPostId]=useState('')


  useEffect(()=>{
    const postId= props.match.params.postId;
    const post= blogPost.data.find(post => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if(post.blogImage=="") return null


  return(
    <div className="blogPostContainer">
      <Card style={{padding:'15px', boxSizing: 'border-box'}}>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
  <span className="postBy">Posted on {post.blogdate} by {post.postby}</span>
        </div>

        <div className="postImageContainer">
          <img alt="Post Image" src={require('../../assets/images/'+post.blogImage)}/>
        </div>

        <div className="postContent">
        <h3>{post.postTitle}</h3>
          <p>{post.blogContent}</p>
        </div>
      </Card>

    </div>
   )
 }

export default Blogpost 