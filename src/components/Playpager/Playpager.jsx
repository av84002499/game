import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import "./Playpager.css"

const Playpager = () => {
    return (
        <div>
            <div className="container">
                <header>
                    <div className="match-info">
                        <span>SEC 0 - 0 JSK</span>
                        <span className="timer">2h 28m left</span>
                    </div>
                    <h2>Create Team</h2>
                </header>

                <TabGroup>
                    <TabList>
                        <Tab>Wicket-Keepers</Tab>
                        <Tab>Batters</Tab>
                        <Tab>All-Rounders</Tab>
                        <Tab>Bowlers</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {/* Wicket-Keepers Players */}
                            <div className="players">
                                <div className="player">
                                    <img src="bairstow.jpg" alt="J Bairstow" />
                                    <div className="info">
                                        <h3>J Bairstow</h3>
                                        <p>Sel by 25.21%</p>
                                    </div>
                                    <span className="points">367</span>
                                    <button className="add">+</button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* Batters Players */}
                            <div className="players">
                                <div className="player">
                                    <img src="stubbs.jpg" alt="T Stubbs" />
                                    <div className="info">
                                        <h3>T Stubbs</h3>
                                        <p>Sel by 72.9%</p>
                                    </div>
                                    <span className="points">357</span>
                                    <button className="add">+</button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* All-Rounders Players */}
                            <div className="players">
                                <div className="player">
                                    <img src="conway.jpg" alt="D Conway" />
                                    <div className="info">
                                        <h3>D Conway</h3>
                                        <p>Sel by 78.99%</p>
                                    </div>
                                    <span className="points">364</span>
                                    <button className="add">+</button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* Bowlers Players */}
                            <div className="players">
                                <div className="player">
                                    <img src="bairstow.jpg" alt="J Bairstow" />
                                    <div className="info">
                                        <h3>J Bairstow</h3>
                                        <p>Sel by 25.21%</p>
                                    </div>
                                    <span className="points">367</span>
                                    <button className="add">+</button>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

                <footer>
                    <button className="preview">Preview</button>
                    <button className="next">Next</button>
                </footer>
            </div>
        </div>
    )
}

export default Playpager;
