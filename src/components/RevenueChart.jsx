import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4700 },
    { month: "May", revenue: 5890 },
    { month: "Jun", revenue: 6390 },
    { month: "Jul", revenue: 7490 }

];

const RevenueChart = () => {
    return ( 
        <div className="chart-container">
            <h3 className="chart-title">Revenue Overview</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
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