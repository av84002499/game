import React from 'react'
import "./Captain.css"

const Captain = () => {
  return (
    <div className="background1">
    <div className='container11'>
      <div className="info">
      <p className="text-center">Choose your Captain and Vice Captain</p>
      <div className="points-info">
                <span className="captain">C: 2X (double) points</span>
                <span className="vice-captain">VC: 1.5X points</span>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Points</th>
                    <th>% C BY</th>
                    <th>% VC BY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="player">
                    <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                    <span>R Singh</span>
                        <span className="role">MAL WK</span>
                    </td>
                    <td>204 pts</td>
                    <td><button className="select-btn">C</button></td>
                    <td><button className="select-btn">VC</button></td>
                </tr>
                <tr>
                    <td className="player">
                    <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                    <span>K Gholiya</span>
                        <span className="role">PNJ WK</span>
                    </td>
                    <td>155 pts</td>
                    <td><button className="select-btn">C</button></td>
                    <td><button className="select-btn">VC</button></td>
                </tr>
                <tr>
                    <td className="player">
                    <img src="../assets/dhoin.jpg" alt="J Bairstow" />
                    <span>A Arshad</span>
                        <span className="role">PNJ BAT</span>
                    </td>
                    <td>329 pts</td>
                    <td><button className="select-btn">C</button></td>
                    <td><button className="select-btn">VC</button></td>
                </tr>
            </tbody>
        </table>

        <div className="footer">
        <a href="./Createplear">
                <button className="preview-btn2">👁 Preview</button>
                </a>
                <a href="./Pyment">
                <button className="next-btn2">SAVE</button>
                </a>
        </div>
        </div>
    </div>
  )
}

export default Captain