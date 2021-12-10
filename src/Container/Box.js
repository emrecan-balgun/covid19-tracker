import { useSelector } from 'react-redux';
import { globalConfirmed, globalRecovered, globalDeaths } from '../redux/covidSlice';

function Box() {
    const confirmed = useSelector(globalConfirmed);
    const recovered = useSelector(globalRecovered);
    const deaths = useSelector(globalDeaths);

    let numberFormat = new Intl.NumberFormat('en-us');

    return (
        <div className="boxes">
            <div className="boxes__confirmed">
                <span className="boxes__confirmed__value">{numberFormat.format(confirmed)}</span>
                <span className="boxes__confirmed__name">confirmed</span>
            </div>

            <div className="boxes__recovered">
                <span className="boxes__recovered__value">{numberFormat.format(recovered)}</span>
                <span className="boxes__recovered__name">recovered</span>
            </div>

            <div className="boxes__deaths">
                <span className="boxes__deaths__value">{numberFormat.format(deaths)}</span>
                <span className="boxes__deaths__name">deaths</span>
            </div>
            
        </div>
    )
}

export default Box
