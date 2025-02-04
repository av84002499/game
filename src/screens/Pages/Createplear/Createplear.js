import React from 'react';
import "./Createplear.css";

const Createplear = () => {
    return (
        <div className="container">
            <div className="card8">
                <div className="header1">Pick your favourite players</div>
                <div className="card9">
                    <img src="../assets/team.png" className="card-img-top" alt="User Icon" />
                    <div className="card-body">
                        <a href="!" className="btn btn-primary">CREATE YOUR OWN TEAM</a>
                    </div>
                </div>
                <div class="separator">
        <span>OR</span>
    </div>
    <div class="guru-section">
        <div class="text-content">
            <h2>Pick from Guru Teams</h2>
            <p>Helped <span class="highlight">2 Crore+</span> people win</p>
        </div>
        <a href="!" class="view-all">View All &#8250;</a>
    </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="!" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="!" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createplear;
