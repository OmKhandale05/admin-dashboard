import { useState } from "react";
import "../styles/Settings.css"

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "Admin",
    email: "admin@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveSettings = () => {
    alert("sattings saved.");
  };
  return (
    <div className="setting-page">
      <h1>Settings</h1>
      <div className="settings-card">
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="save-settings-btn" onClick={saveSettings}>Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
