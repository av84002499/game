import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import "./Auth.css";

const Forgot = () => {
    const [formData, setFormData] = useState({ emailOrPhone: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleForgotPassword = () => {
        if (!formData.emailOrPhone) {
            Swal.fire("Error", "Please enter your email or phone number!", "error");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.emailOrPhone) && !/^\d{10}$/.test(formData.emailOrPhone)) {
            Swal.fire("Invalid Input", "Enter a valid email or phone number!", "error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: "Success",
                text: "OTP sent to your email or phone number!",
                showConfirmButton: false,
                timer: 3000,
            });

            // Navigate to the OTP page
            navigate("/Otp");
        }, 3000);
    };

    return (
        <div className="login-container">
            <div className="card2">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Email or Phone"
                        value={formData.emailOrPhone}
                        onChange={(e) => handleInputChange("emailOrPhone", e.target.value)}
                        className="input"
                    />
                    <hr />
                    <button className="button" onClick={handleForgotPassword} disabled={loading}>
                        {loading ? <Loader /> : "Send OTP"}
                    </button>
                </div>
            </div>
            {loading && <Loader />}
        </div>
    );
};

export default Forgot;
