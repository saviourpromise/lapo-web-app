import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Define the data type
type DataPoint = {
name: string;
value: number;
};

// Sample Data
const data: DataPoint[] = [
{ name: "Jan", value: 40 },
{ name: "Feb", value: 30 },
{ name: "Mar", value: 50 },
{ name: "Apr", value: 45 },
{ name: "May", value: 60 },
];

// Custom colors for each slice
const COLORS = ["#01A4AF", "#FFBA24", "#FF4457", "#8020E7", "#014DAF"];

// Custom Legend Renderer
const renderLegend = (props: any) => {
const { payload } = props;
return (
<ul className="flex justify-center mt-2 space-x-4 text-[12px] text-gray-700">
{payload.map((entry: any, index: number) => (
<li key={`item-${index}`} className="flex items-center space-x-1">
<span
className="w-3 h-3 inline-block rounded-full"
style={{ backgroundColor: entry.color }}
></span>
<span>{entry.value}</span>
</li>
))}
</ul>
);
};

const SalesPieChart: React.FC = () => {
return (
<div className="border-[3px] border-[#E2E2E2] rounded-lg px-4 py-2 bg-white my-3 max-sm:w-full">
<h2 className="text-lg font-semibold text-gray-700 mb-2">Card Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={data}
cx="50%"
cy="50%"
outerRadius={80}
fill="#8884d8"
dataKey="value"
label
>
{data.map((_, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend content={renderLegend} />
</PieChart>
</ResponsiveContainer>
</div>
);
};

export default SalesPieChart;