import React from 'react';
import './App.css';
import Home from './containers/Home'
import ContactUs from './containers/ContactUs'
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './containers/Post';
import AboutUs from './containers/AboutUs';
import Homepage from './containers/Homepage';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Route exact path='/' component={Homepage}/>
      <Route path='/contactus' component={ContactUs}/>
      <Route path='/aboutus' component={AboutUs}/>
      <Route path='/post/:postId' component={Post}/>
      <Footer></Footer>
      
    </div>
    </Router>
  );
}

export default App;
