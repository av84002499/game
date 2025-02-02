import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="card4">
            <h2 className="card-header" style={{ marginLeft: "40px" }}>Match Overview</h2>

            <hr />

            <div className="card-body">

                <div class="card-group">
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>

                </div>

                <div class="card-group">
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                </div>

                <div class="card-group ">
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>

                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                    <div class="card5">
                        <div class="card-content">
                            <h2>Match 1</h2>
                            <p>Team A vs Team B</p>
                            <p>03:30 PM, Live</p>
                        </div>
                        <img src="../assets/Image135.jpg" alt="fotbal" class="card-img-top" />
                    </div>
                </div>

            </div>

            <div className="card6">
                <h2 className="card-header" style={{ marginLeft: "30px" }}>User Dashboard</h2>

                <div className="card-body">
                    <div class="card-group ">

                        <div class="card-content">
                            <div className="wallet-card">
                                <div className="wallet-info">
                                    <p className="wallet-title">Wallet Balance</p>
                                    <h1 className="wallet-amount">$1,250.00</h1>
                                    <div className="arrow-down"></div>
                                </div>
                                <div className="wallet-chart">
                                    <div className="bar tall"></div>
                                    <div className="bar short"></div>
                                    <div className="bar medium"></div>
                                    <div className="bar tall light"></div>
                                    <div className="bar tall"></div>
                                    <div className="bar short light"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card-content">
                            <div className="wallet-card">
                                <div className="wallet-info">
                                    <p className="wallet-title">Contests Summary</p>
                                    <h1 className="wallet-amount">18%</h1>
                                    <div className="arrow-up">75%</div>
                                    
                                </div>
                                <div className="wallet-chart">
                                    <div className="bar tall"></div>
                                    <div className="bar short"></div>
                                    <div className="bar medium"></div>
                                    <div className="bar tall light"></div>
                                    <div className="bar tall"></div>
                                    <div className="bar short light"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card-content">
                            <div className="wallet-card">
                                <div className="wallet-info">
                                    <p className="wallet-title">Performance</p>
                                    <h5 className="wallet-amount">100%</h5>
                                    <div className="arrow-up">75%</div>
                                </div>
                                <div className="wallet-chart">
                                    <div className="bar tall"></div>
                                    <div className="bar short"></div>
                                    <div className="bar medium"></div>
                                    <div className="bar tall light"></div>
                                    <div className="bar tall"></div>
                                    <div className="bar short light"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card7 mb-4">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body1">
          <h1 className="card-title text-center text-white">Join New Contests</h1>
          <p className="card-text">
              Participate in exciting new contests and showcase your skills against fellow sports enthusiasts!
          </p>
          <button>Join for free</button>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="../assets/Image 50.jpg"
            className="img-fluid rounded-end"
            alt="Card"
          />
        </div>
      </div>
    </div>


        </div>
    );
};

export default Dashboard;
