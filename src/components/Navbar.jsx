import { useEffect, useState } from "react";
import "../styles/Navbar.css"


const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme",theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  return (
    <div className="navbar">
      <h3 className="navbar-title">Admin Dashboard</h3>

      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <div className="navbar-right">
        <div className="profile">Admin</div>
      </div>
    </div>
  );
};
export default Navbar;
