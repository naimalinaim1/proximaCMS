import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Activity = () => {
  const [data, setData] = useState([
    { name: "Jan", steps: 5000 },
    { name: "Feb", steps: 8000 },
    { name: "Mar", steps: 10000 },
    { name: "Apr", steps: 7000 },
    { name: "May", steps: 9000 },
    { name: "Jun", steps: 12000 },
    { name: "Jul", steps: 11000 },
    { name: "Aug", steps: 9500 },
    { name: "Sep", steps: 11500 },
    { name: "Oct", steps: 13000 },
    { name: "Nov", steps: 10500 },
    { name: "Dec", steps: 14000 },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Activity Chart</h2>
      <LineChart width={560} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="steps"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Activity;
