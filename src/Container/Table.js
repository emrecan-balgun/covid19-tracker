import React from 'react'
import { Bar
} from 'react-chartjs-2'

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );


function Table() {
    const state = {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets:
            [{
                label: "Infected",
                backgroundColor: ["red", "green","blue"],
                borderColor: "rgba(0,0,0,0)",
                borderWidth: "1",
                data: ["8986377", "0", "78602"]
            }]
    }
    return (
        <div className="chart">
            <h1>Chart</h1>
            <Bar data={state}/>
        </div>
    )
}

export default Table
