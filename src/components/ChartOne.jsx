import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Orders',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Inventory',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Customers',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Revenue',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

];

const ChartOne = () => {
    
  return (
    
    <div className='absolute ml-40 mt-60' width={800} height={400} >
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </div>

  )
}

export default ChartOne