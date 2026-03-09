const Sidebar = () => {
    return ( 
        <div>
            <h2>Admin</h2>
            <ul>
                <li>
                    <link to="/">Dashboard</link>
                </li>
                <li>
                    <link to="/users">Users</link>
                </li>
                <li>
                    <link to="/products">Products</link>
                </li>
                <li>
                    <link to="/orders">Orders</link>
                </li>
                <li>
                    <link to="/settings">Settings</link>
                </li>
            </ul>
        </div>
     );
}
 
export default Sidebar;