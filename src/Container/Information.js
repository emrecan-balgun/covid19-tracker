import React from 'react'
import Box from './Box'
import Table from './Table'
import Header from './Header'

function Information() {
    return (
        <>
        <Header />
        <div className="information">
            <h2 className="information__title">Global Data</h2>
            <span className="information__time">Last update: 10.12.2021 00:15</span>
            <select name="cars" id="cars">
                <option value="" disabled selected hidden>Global</option>
                {
                    // https://restcountries.com
                }
            </select>
            <Box />
        </div>
        <Table />
        </>
    )
}

export default Information
