import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'


const Home = props => {
    return (
      <div className="container1">
        <Card className="maincontainer" style={{padding:'15px', boxSizing: 'border-box'}}>
        <div className="cardHeader1">
          <span>Ananya Tripathi</span>
        </div>
        <div className="HarryContainer1">
          <img alt="Harry" src={require('../../assets/images/annacover.jpeg')}/>
        </div>
        <div className="cardbody1">
          <p className="personalBio1">Hey, Glad to see you here. I am Ananya Tripathi, II year Computer Science student at NIIT University. You can consider me as a happy going person, with a positive attitude towards almost everything. I am very friendly and love to meet new people and learn new things from them. I have always been good in academics but now i want to explore things out of books. I strongly beleive that <i>World inside books you you should be, but the world outside the books make you what you are.</i></p>
          <p className="personalBio1">I have great interest in development field and learning new technologies. I have good hands on frontend development which includes React, HTML, CSS, JavaScript and Android Studio XML. I have handled the frontend of the project named <i>"Knocking Doors"</i> an android app to connectcustomers and professionals and also designed its logo. I am also working on a Mental Health project <i>"Soothe". I am also quite interested in UI/UX designing.</i></p>
          <p className="personalBio1">Please check 'Post' section to see my collection of poetry. Feel free to contact me anytime, would love to share few more things about me and alot about you. Thanks!!</p>
        </div>
      </Card>
      
      
      </div>
    )
}
export default Home