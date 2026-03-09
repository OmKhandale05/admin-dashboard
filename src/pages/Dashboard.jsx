import RevenueChart from "../components/RevenueChart";
import StatCard from "../components/StatCard";
import UsersTable from "../components/UsersTable";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <div className="card-container">

        <StatCard title="Total Users" value="1200"/>
        <StatCard title="Total Orders" value="350"/>
        <StatCard title="Revenue" value="$8,200"/>
        <StatCard title="Active Devices" value="85"/>

      </div>
      <RevenueChart/>

      <UsersTable/>
    </div>
  );
};

export default Dashboard;
