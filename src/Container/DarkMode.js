import { useState } from 'react'
import moon from '../Assets/moon.png';
import sun from '../Assets/sun.png';

function DarkMode() {
    const [state, setstate] = useState(false)

    return (
        <>
        
        <button className="darkMode" onClick={() => setstate(!state)}>
            {
                state === true 
                ? <img className="darkMode__image" src={moon} alt="moon" /> 
                : <img className="darkMode__image" src={sun} alt="sun" />
            }
            
        </button>
        </>
    )
}

export default DarkMode
