import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import "../styles/Charts.css"
import { revenueData } from "../data/revenueData";

const RevenueChart = () => {
    return ( 
        <div className="chart-container">
            <h3 className="chart-title">Revenue Overview</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    strokeWidth={3}
                    
                    />

                </LineChart>

            </ResponsiveContainer>

    
        </div>
     );
}
 
export default RevenueChart;