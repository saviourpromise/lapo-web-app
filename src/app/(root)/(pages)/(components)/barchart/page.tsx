"use client"; // If using Next.js App Router

import React from "react";
import dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface DataPoint {
name: string;
sales: number;
expenses: number;
profit: number;
}


const data: DataPoint[] = [
{ name: "Jan", sales: 4000, expenses: 2000, profit: 2000 },
{ name: "Feb", sales: 3000, expenses: 1500, profit: 1500 },
{ name: "Mar", sales: 5000, expenses: 2200, profit: 2800 },
{ name: "Apr", sales: 4500, expenses: 1800, profit: 2700 },
{ name: "May", sales: 6000, expenses: 2500, profit: 3500 },
];

const SalesBarChart: React.FC = () => {
return (
<div style={{ width: "100%", height: 350 }} className="border-[3px] border-[#E2E2E2] rounded-lg px-4 py-2 bg-white my-3 max-sm:w-full">
<p className="text-[#121212] text-[18px] font-medium mt-1 mb-1">Monthly Issuance</p>
<ResponsiveContainer>
<BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }} className="text-[14px]">
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="sales" fill="#014DAF" barSize={40} />
<Bar dataKey="expenses" fill="#CCE2FF" barSize={40} />
{/* <Bar dataKey="profit" fill="#ffc658" barSize={40} /> */}
</BarChart>
</ResponsiveContainer>
</div>
);
};

// For Next.js, dynamically import to prevent SSR issues
export default dynamic(() => Promise.resolve(SalesBarChart), { ssr: false });