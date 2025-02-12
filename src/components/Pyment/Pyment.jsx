import React from 'react'
import "./Pyment.css"

const Pyment = () => {
  return (
    <div>
         <div class="confirmation-container">
        <div class="header">
            <span class="close-btn">&times;</span>
            <h2>Confirmation</h2>
            <p class="amount-info">Amount Unutilised + Winnings = ₹60</p>
        </div>
        <div class="content">
            <div class="entry">
                <span>Entry</span>
                <span class="price">₹49</span>
            </div>
            <div class="to-pay">
                <span>To Pay <i class="info-icon">ℹ</i></span>
                <span class="price">₹49</span>
            </div>
            <div class="terms">
                <input type="checkbox" id="terms"/>
                <label for="terms">I agree with the standard <span class="tcs">T&Cs</span></label>
            </div>
            <button class="join-btn">JOIN CONTEST</button>
        </div>
    </div>
    </div>
  )
}

export default Pyment