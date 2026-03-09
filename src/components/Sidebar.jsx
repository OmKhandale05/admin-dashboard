import { Link } from "react-router-dom";
import "../styles/Sidebar.css"

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <h2 className="sidebar-title">Admin</h2>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <Link to="/">Dashboard</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/users">Users</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/products">Products</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/orders">Orders</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Sidebar;