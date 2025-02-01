import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import "./Auth.css";

const Updatepass = () => {
    const [formData, setFormData] = useState({
        newPassword: "",
        retypeNewPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false); // Separate state for new password visibility
    const [showRetypePassword, setShowRetypePassword] = useState(false); // Separate state for retype password visibility
    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleUpdatePassword = () => {
        if (!formData.newPassword || !formData.retypeNewPassword) {
            Swal.fire("Error", "Please enter and confirm your new password!", "error");
            return;
        }

        if (formData.newPassword !== formData.retypeNewPassword) {
            Swal.fire("Error", "Passwords do not match!", "error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: "Success", 
                text: "Password updated successfully!", // Fixed the issue here
                showConfirmButton: false,
                timer: 3000,
            });

            console.log("Register Data==>", formData); // Changed otp to formData (as otp is not defined)
            navigate("/Login");
        }, 3000);
    };

    return (
        <div className="login-container">
            <div className="card3">
                <div className="card-body">
                    <div className="password-container">
                        <input
                            type={showNewPassword ? "text" : "password"} // Use showNewPassword for New Password field
                            placeholder="New Password"
                            value={formData.newPassword}
                            onChange={(e) => handleInputChange("newPassword", e.target.value)}
                            className="input"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)} // Toggle visibility of new password
                            className="eye-button"
                            aria-label="Toggle password visibility"
                        >
                            {showNewPassword ? "👁️" : "🙈"}
                        </button>
                    </div>
                    <div className="password-container">
                        <input
                            type={showRetypePassword ? "text" : "password"} // Use showRetypePassword for Retype New Password field
                            placeholder="Retype New Password"
                            value={formData.retypeNewPassword}
                            onChange={(e) => handleInputChange("retypeNewPassword", e.target.value)}
                            className="password-input"
                        />
                        <button
                            type="button"
                            onClick={() => setShowRetypePassword(!showRetypePassword)} // Toggle visibility of retype password
                            className="eye-button"
                            aria-label="Toggle password visibility"
                        >
                            {showRetypePassword ? "👁️" : "🙈"}
                        </button>
                    </div>
                    <hr />
                    <button className="button" onClick={handleUpdatePassword} disabled={loading}>
                        {loading ? <Loader /> : "Update Password"}
                    </button>
                </div>
            </div>
            {loading && <Loader />}

        </div>
    );
};

export default Updatepass;
