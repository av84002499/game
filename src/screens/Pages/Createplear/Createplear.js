import React from 'react';
import "./Createplear.css";

const Createplear = () => {
    return (
        <div className='background2'>
        <div className="container">
            <div className="card8">
                <div className="header1">Pick your favourite players</div>

                <div className="card9">
                    <img src="../assets/team.png" className="card-img-top" alt="User Icon" />
                    <div className="card-body">
                        <a href="/Playpager" className="btn btn-primary">CREATE YOUR OWN TEAM</a>
                    </div>
                </div>

                <div className="separator">
                    <span>OR</span>
                </div>


                <div className='card10'>
                <div className="guru-section">
                    <div className="text-content">
                        <h2>Pick from Guru Teams</h2>
                        <p>Helped <span className="highlight">2 Crore+</span> people win</p>
                    </div>
                    <a href="!" className="view-all">View All &#8250;</a>
                </div>
                </div>


            </div>


       
        </div>
        </div>
    );
}

export default Createplear;
