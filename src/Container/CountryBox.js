import React from 'react'

function CountryBox() {
    return (
        <div className="countryBox">
            <div className="countryBox__information">
                <span className="countryBox__information__country">Turkey</span>
                <span className="countryBox__information__time">Last update: 10.12.2021 00:15</span>
            </div>
            <div className="countryBox__confirmed">
                <span className="countryBox__confirmed__value">123,423</span>
                <span className="countryBox__confirmed__name">confirmed</span>
            </div>
            <div className="countryBox__recovered">
                <span className="countryBox__recovered__value">123,423</span>
                <span className="countryBox__recovered__name">recovered</span>
            </div>
            <div className="countryBox__deaths">
                <span className="countryBox__deaths__value">123,423</span>
                <span className="countryBox__deaths__name">deaths</span>
            </div>
        </div>
    )
}

export default CountryBox
