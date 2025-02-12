import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import "./Playpager.css";

const Playpager = () => {
    return (
        <>
            <header className="header">
                <div className="match-info">
                    <h2>Create Team</h2>
                    <div className="time-left">2h 28m left</div>
                </div>
                <div className="match-details">
                    <span className="team" style={{ textAlign: "left" }}>
                        <img src="../assets/csk.jpg" alt="CSK Logo" className="team-logo" />
                        SEC
                    </span>
                    <span className="score">1 - 1</span>
                    <span className="team" style={{ textAlign: "right" }}>
                        JSK
                        <img src="../assets/lucknow.jpg" alt="JSK Logo" className="team-logo" />
                    </span>
                </div>

                <div className="progress-bar">
                    <span>0/11</span>
                </div>
            </header>

            <TabGroup>
                <TabList className="category-tabs">
                    <Tab className={({ selected }) => selected ? "active" : ""}>Wicket-Keepers</Tab>
                    <Tab className={({ selected }) => selected ? "active" : ""}> Batter</Tab>
                    <Tab className={({ selected }) => selected ? "active" : ""}>All-Rounders</Tab>
                    <Tab className={({ selected }) => selected ? "active" : ""}>Bowlers</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <section className="player-list">
                            <div className="player-card">
                                <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                                <div className="player-info">
                                    <h3>J Bairstow</h3>
                                    <p>Sel by 25.21%</p>
                                </div>
                                <span className="points">367</span>
                                <span className="credits">8.5</span>
                                <button className="add-btn">+</button>
                            </div>
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className="player-list">
                            <div className="player-card">
                            <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                            <div className="player-info">
                                    <h3>T Stubbs</h3>
                                    <p>Sel by 72.9%</p>
                                </div>
                                <span className="points">357</span>
                                <span className="credits">8.0</span>
                                <button className="add-btn">+</button>
                            </div>
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className="player-list">
                            <div className="player-card">
                            <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                            <div className="player-info">
                                    <h3>D Conway</h3>
                                    <p>Sel by 78.99%</p>
                                </div>
                                <span className="points">364</span>
                                <span className="credits">8.0</span>
                                <button className="add-btn">+</button>
                            </div>
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className="player-list">
                            <div className="player-card">
                            <img src="../assets/dhoin.jpg" alt="J Bairstow" />

                            <div className="player-info">
                                    <h3>D Smith</h3>
                                    <p>Sel by 0.58%</p>
                                </div>
                                <span className="points">0</span>
                                <span className="credits">6.0</span>
                                <button className="add-btn">+</button>
                            </div>
                        </section>
                    </TabPanel>
                    
                    <tr>
                    <td class="player">
                    <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                    <span>R Singh</span>
                        <span class="role">MAL WK</span>
                    </td>
                    <td>204 pts</td>
                    <td><button class="select-btn">C</button></td>
                    <td><button class="select-btn">VC</button></td>
                </tr>
                </TabPanels>
            </TabGroup>

            <footer className="bottom-nav">
            <a href="./Createplear">
                <button className="preview-btn">👁 Preview</button>
                </a>
                <a href="./Captain">
                <button className="next-btn">Next</button>
                </a>
            </footer>
        </>
    );
}

export default Playpager;
