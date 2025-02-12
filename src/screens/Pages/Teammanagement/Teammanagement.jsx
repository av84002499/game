import React from 'react'
import "./Teammanagement.css"

const Teammanagement = () => {
  return (
    <>
     <div className="container4">
        <h2>My Matches</h2>
        <hr />
        
        <div className="matches-grid">
            <div className="match-card">
                <p>Team A vs Team B</p>
                <p>12:00 PM, <span className="live">Live</span></p>
            </div>
           
            <div className="match-card">
                <p>Team E vs Team F</p>
                <p>4:00 PM, Upcoming</p>
            </div>
            <div className="match-card">
                <p>Team G vs Team H</p>
                <p>6:00 PM, Upcoming</p>
            </div>
            <div className="match-card">
                <p>Team G vs Team H</p>
                <p>6:00 PM, Upcoming</p>
            </div>
            <div className="match-card">
                <p>Team G vs Team H</p>
                <p>6:00 PM, Upcoming</p>
            </div>
            <div className="match-card">
                <p>Team G vs Team H</p>
                <p>6:00 PM, Upcoming</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default Teammanagement