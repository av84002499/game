import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import "./Auth.css";

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Fixed: Now using the navigation hook

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleLogin = () => {
        const { emailOrPhone, password } = formData;

        if (!emailOrPhone || !password) {
            Swal.fire("Error", "All fields are required!", "error");
            return;
        }

        // Validate email or phone number format
        if (!/\S+@\S+\.\S+/.test(emailOrPhone) && !/^\d{10}$/.test(emailOrPhone)) {
            Swal.fire("Invalid Input", "Please enter a valid email or phone number!", "error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Login successfully!',
                showConfirmButton: false,
                timer: 3000,
            });

            console.log("Register Data==>", formData);
            navigate("/Dashboard");
        }, 3000);
    };

    return (
        <div className="login-container">
            <div className="card">
                <div className="card-body">
                    <h1 className="text-center">Access Account</h1>
                    <h5 className="text-center">
                        Manage your fantasy teams and track performance
                    </h5>

                    <div className="form-container">
                        <input
                            type="text"
                            placeholder="Email or Phone"
                            value={formData.emailOrPhone}
                            onChange={(e) => handleInputChange("emailOrPhone", e.target.value)}
                            className="input"
                        />

                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className="password-input"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="eye-button"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>

                        <button className="button" onClick={handleLogin} disabled={loading}>
                            Login
                        </button>

                        <p className="link-text">
                            Not a user? Please{" "}
                            <Link to="/register" className="link">
                                Register
                            </Link>
                        </p>

                        <h6 className="link-text">
                            <Link to="/forgot" className="link">
                                Forgot password?
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
            {loading && <Loader />}

        </div>
    );
};

export default Login;
