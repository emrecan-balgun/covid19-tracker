import React from 'react'
import { Bar
} from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux';
import { changeConfirmed, changeRecovered, changeDeaths, changeLastUpdate, country, currentConfirmed, currentRecovered, currentDeaths, currentLastUpdate, show } from '../redux/covidSlice';

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
    const confirmed = useSelector(currentConfirmed);
    const recovered = useSelector(currentRecovered);
    const deaths = useSelector(currentDeaths);

    const state = {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets:
            [{
                label: "Confirmed",
                backgroundColor: ['#dd6b20', "#319795","#822727"],
                borderWidth: "0",
                data: [confirmed, recovered, deaths]
            }]
    }
    return (
        <div className="chart">
            <Bar data={state}/>
        </div>
    )
}

export default Table
