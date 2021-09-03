import React from 'react';

import "./Chart.scss"

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart(props) {
    const { DATA} = props;
    return (
        <div className="chart">
            <div className="chart__title">Chart Analytics</div>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={DATA} > 
                <XAxis dataKey="name" stroke="#555" ></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="New user" strokeWidth="3px"></Line>
                <Line type="monotone" dataKey="sales number" strokeWidth="3px" stroke="chartreuse"></Line>
                <Line type="monotone" dataKey="Visitors number" strokeWidth="3px" stroke="cyan"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;