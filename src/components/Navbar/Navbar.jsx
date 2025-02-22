import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = () => {
    // Clear authentication tokens or session storage
    localStorage.removeItem("authToken"); // Example
    sessionStorage.clear();
    
    // Redirect to login or home page
    window.location.href = "/login";
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="../assets/logo.jpg" alt="Fantasy League Hub" className="logo-img me-2" />
          <span className="fw-bold">Fantasy League Hub</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <h5 className="nav-item active"><a className="nav-link" href="/Dashboard">Dashboard</a></h5>
            <h5 className="nav-item"><a className="nav-link" href="/Mymatches">My Matches</a></h5>
            <h5 className="nav-item"><a className="nav-link" href="/profile">Profile</a></h5>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search fs-5"></i>
            <i className="bi bi-people-fill fs-5"></i>
            <i className="bi bi-bell-fill fs-5"></i>
     <div className="profile-menu">
      <img
        src="../assets/user.png"
        alt="User Profile"
        className="profile-img"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
      />
      {isOpen && (
        <div className="dropdown">
          <a href="/profile" className="dropdown-item">Profile</a>
          <button className="dropdown-item logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
