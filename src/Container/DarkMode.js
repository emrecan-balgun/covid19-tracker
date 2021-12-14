import moon from '../Assets/moon.png';
import sun from '../Assets/sun.png';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, changeDarkMode } from '../redux/covidSlice';

function DarkMode() {
    const mode = useSelector(darkMode);
    const dispatch = useDispatch();

    return (
        <button className="darkMode" onClick={() => dispatch(changeDarkMode(!mode))}>
            {
                mode === true 
                ? <img className="darkMode__image" src={moon} alt="moon" /> 
                : <img className="darkMode__image" src={sun} alt="sun" />
            }
            
        </button>
    )
}

export default DarkMode
