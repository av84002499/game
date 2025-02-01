import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import "./Auth.css";

const Otp = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleOtpSubmit = () => {
        if (!/^\d{6}$/.test(otp)) {
            Swal.fire("Invalid OTP", "Please enter a valid 6-digit OTP!", "error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: "Success", 
                text: "OTP verified successfully!", 
                showConfirmButton: false,
                timer: 3000,
            });

            console.log("Register Data==>", otp); 
            navigate("/Updatepass");
        }, 3000);
    };

    return (
        <div className="login-container">
            <div className="card2">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={handleOtpChange}
                        className="input"
                        maxLength={6}
                    />
                    <hr />
                    <button className="button" onClick={handleOtpSubmit} disabled={loading}>
                        {loading ? <Loader /> : "Verify OTP"}
                    </button>
                </div>
            </div>
            {loading && <Loader />}
        </div>
    );
};

export default Otp;
