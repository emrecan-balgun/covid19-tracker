import React from 'react'
import Box from './Box'
import Chart from './Chart'
import Header from './Header'

function Information() {
    return (
        <>
        <Header />
        <div className="information">
            <h2 className="information__title">Global Data</h2>
            <span className="information__time">Last update: 10.12.2021 00:15</span>
            {/* <select name="cars" id="cars">
                <option value="" disabled selected hidden>Global</option>
                <option value="turkey">Turkey</option>
                <option value="usa">USA</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
            </select> */}
            <Box />

        </div>
        <Chart />
        </>
    )
}

export default Information
