import React from 'react'
import "./Pyment.css"

const Pyment = () => {
    return (
        <div>
            <div className="confirmation-container">
                <div className="header">
                    <h2>Confirmation</h2>
                </div>
                <div className="content">
                    <div className="entry">
                        <span>Entry</span>
                        <span className="price">₹49</span>
                    </div>
                    <div className="to-pay">
                        <span>To Pay <i className="info-icon">ℹ</i></span>
                        <span className="price">₹49</span>
                    </div>
                    <div className="terms">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            I agree with the standard <span className="tcs">T&Cs</span>
                        </label>

                        <style jsx>{`
        .terms input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-right: 5px;
        }
      `}</style>
                    </div>
                    <a href="./Createplear">

                    <button className="join-btn">JOIN CONTEST</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pyment