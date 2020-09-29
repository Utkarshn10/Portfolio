import React from 'react'
import Card from '../../components/UI/Card'
import './style.css'


const Homeside = (props) => {
  return(
    <div className="sidebarContainer2" style={{
      width:props.width
    }}>
        <Card style={{marginBottom:"20px", padding:'15px', boxSizing: 'border-box'}}>
        <div className="cardHeader2">
          <span>Hobbies</span>
        </div>
        <div className="cardbody2">
          <p className="personalBio2"><b>-</b> Writing</p>
          <p className="personalBio2"><b>-</b> Singing</p>
          <p className="personalBio2"><b>-</b> Badminton</p>
          <p className="personalBio2"><b>-</b> Travelling and meeting new people</p>
          <p className="personalBio2"><b>-</b> Designing</p>
        </div>
      </Card>

      <Card style={{marginBottom:"20px", padding:'15px', boxSizing: 'border-box'}}>
        <div className="cardHeader2">
          <span>Achievements</span>
          <div className="achieve">
          <p className="personalBio2"><b>-</b> Class 10 : 10 CGPA</p>
          <p className="personalBio2"><b>-</b> Class 12 : 92%</p>
          <p className="personalBio2"><b>-</b> Current CGPA : 9.51 CGPA</p>
          <p className="personalBio2"><b>-</b> Coordinator KaviShaala: A Poetic Society</p>
          <p className="personalBio2"><b>-</b> NSS Member</p>
          </div>
        </div>
      </Card>
      </div>
   )

 }

export default Homeside