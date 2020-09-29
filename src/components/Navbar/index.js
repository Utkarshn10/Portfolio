import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import AboutUs from '../../containers/AboutUs';


const Navbar = (props) => {

    const[search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault(); 
        alert("fds") 
    }

    const openSearch = () =>{
        setSearch(true);
    }

    const searchClass = search ? 'searchinput active' : 'searchinput'

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='post/1'>Post</NavLink></li>
        </ul>

        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder='Search'/>
                <img onClick= {openSearch} className='searchicon' src={require('../../assets/icons/search.png')} alt="search"/>
            </form>
        </div>
    </div>
   )

 }

export default Navbar