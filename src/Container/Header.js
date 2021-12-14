import React from 'react'
import DarkMode from './DarkMode'

function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Covid-19 Coronavirus Outbreak</h1>
            <span className="header__subtitle">Stay safe, stay home</span>
            <DarkMode />
        </div>
    )
}

export default Header
