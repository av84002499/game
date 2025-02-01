import React, { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader/Loader";
import "./Auth.css";

const Register = () => {
    let navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        const { name, email, phone, password } = formData;

        if (!name || !email || !phone || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'All fields are required!',
                showConfirmButton: true,
            });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email format!',
                showConfirmButton: true,
            });
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            Swal.fire({
                icon: 'error',
                title: 'Phone number must be 10 digits!',
                showConfirmButton: true,
            });
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Registered successfully!',
                showConfirmButton: false,
                timer: 3000,
            });

            console.log("Register Data==>", formData);
            navigate("/Login");
        }, 3000);
    };

    return (
        <div className="login-container">
            <div className="container1">
                <h1 className="pageTitle">Register</h1>
                <div className="formContainer">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                    
                    <div className="passwordContainer">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button className="submitButton" onClick={handleRegister} disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="linkText">
                    Already Registered? Please{' '}
                    <span className="link" onClick={() => navigate("/Login")}>
                        Login
                    </span>
                </p>
            </div>
            {loading && <Loader />}

        </div>
    );
};

export default Register;
