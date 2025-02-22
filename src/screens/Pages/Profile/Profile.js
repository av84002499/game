import React, { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Walletdashboard from "../../../components/Walletdashboard/Walletdashboard"

import "./Profile.css";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // ✅ Fixed showPassword state

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    posts: 120,
    likes: 300,
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({ ...prevSettings, [name]: checked }));
  };

  const handleSaveChanges = () => {
    setLoading(true);
    setTimeout(() => {
      setIsEditing(false);
      setLoading(false);
    }, 1000);
  };

  const handleSaveSettings = () => {
    setSavingSettings(true);
    setTimeout(() => {
      alert("Settings saved successfully!");
      setSavingSettings(false);
    }, 1000);
  };

  return (
    <>

      <div className="card14">
        <TabGroup>
          <TabList className="category-tabs1">
            <Tab className={({ selected }) => selected ? "active" : ""}>Profile</Tab>
            <Tab className={({ selected }) => selected ? "active" : ""}> Walletdashboard</Tab>

          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="container13">
                <section className="profile-section">
                  <div className="profile-details">
                    <img src="profile-pic.jpg" alt="User Profile" className="profile-pic" />
                    <div className="profile-info">
                      <h2>{userData.name}</h2>
                      <p>Email: {userData.email}</p>
                      <p>Activity: {userData.posts} posts, {userData.likes} likes</p>
                      <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Cancel" : "Edit"}
                      </button>
                    </div>
                  </div>
                </section>

                {isEditing && (
                  <section className="edit-profile">
                    <h3>Edit Profile</h3>
                    <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Name" />
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email" />

                    <div className="password-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
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

                    <button className="save-btn" onClick={handleSaveChanges}>
                      {loading ? <Loader /> : "Save Changes"}
                    </button>
                  </section>
                )}

                <section className="referral-settings">
                  <h3>Referral System & Settings</h3>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="input"
                  />
                  <button className="invite-btn">Invite Friends</button>

                  <div className="settings">
                    <label>
                      <input type="checkbox" name="emailNotifications" checked={settings.emailNotifications} onChange={handleSettingsChange} />
                      Email Notifications
                    </label>
                    <label>
                      <input type="checkbox" name="smsNotifications" checked={settings.smsNotifications} onChange={handleSettingsChange} />
                      SMS Notifications
                    </label>
                    <label>
                      <input type="checkbox" name="pushNotifications" checked={settings.pushNotifications} onChange={handleSettingsChange} />
                      Push Notifications
                    </label>
                    <button className="save-settings-btn" onClick={handleSaveSettings}>
                      {savingSettings ? <Loader /> : "Save Settings"}
                    </button>
                  </div>
                </section>
              </div>
            </TabPanel>

            <TabPanel>
              <Walletdashboard />
            </TabPanel>
          </TabPanels>
        </TabGroup>


      </div>
    </>
  );
};

export default UserProfile;
