'use client';
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Define the data type
type DataPoint = {
month: string;
sales: number;
};

// Sample Data
const data: DataPoint[] = [
{ month: "Mon", sales: 4000 },
{ month: "Tue", sales: 3000 },
{ month: "Wed", sales: 5000 },
{ month: "Thu", sales: 4500 },
{ month: "Fri", sales: 6000 },
{ month: "Sat", sales: 7000 },
{ month: "Sun", sales: 8000 },
];

const SalesLineChart: React.FC = () => {
return (
<div className="border-[3px] border-[#E2E2E2] rounded-lg px-4 py-2 bg-white my-3 max-sm:w-full" style={{ width: "100%", height: 360 }}>
<h2 className="text-lg font-semibold text-gray-700 mb-2">This Week’s Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }} className="text-[14px]">
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="sales" stroke="#4DAF01" strokeWidth={2} dot={{ r: 5 }} />
</LineChart>
</ResponsiveContainer>
</div>
);
};

export default SalesLineChart;