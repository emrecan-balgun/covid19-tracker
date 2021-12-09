import React from 'react'

function Box() {
    return (
        <div className="boxes">
            <div className="boxes__confirmed">
                <span className="boxes__confirmed__value">268,393,653</span>
                <span className="boxes__confirmed__name">confirmed</span>
            </div>

            <div className="boxes__recovered">
                <span className="boxes__recovered__value">0</span>
                <span className="boxes__recovered__name">recovered</span>
            </div>

            <div className="boxes__deaths">
                <span className="boxes__deaths__value">5,285,485</span>
                <span className="boxes__deaths__name">deaths</span>
            </div>
            
        </div>
    )
}

export default Box
