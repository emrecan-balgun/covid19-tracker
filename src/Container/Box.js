import { useSelector } from 'react-redux';
import { globalConfirmed, globalRecovered, globalDeaths } from '../redux/covidSlice';
import { CountUp } from 'use-count-up'

function Box() {
    // const numberFormat = new Intl.NumberFormat('en-us');
    const confirmed = useSelector(globalConfirmed);
    const recovered = useSelector(globalRecovered);
    const deaths = useSelector(globalDeaths);

    return (
        <div className="boxes">
            <div className="boxes__confirmed">
                {/* <span className="boxes__confirmed__value">{numberFormat.format(confirmed)}</span> */}
                <span className="boxes__confirmed__value"><CountUp isCounting end={confirmed} duration={1.4} decimalPlaces={0} decimalSeparator='' thousandsSeparator=','/></span>
                <span className="boxes__confirmed__name">confirmed</span>
            </div>

            <div className="boxes__recovered">
                {/* <span className="boxes__recovered__value">{numberFormat.format(recovered)}</span>
                 */}
                 <span className="boxes__confirmed__value"><CountUp className="boxes__confirmed__value" isCounting end={recovered} duration={1.4} decimalPlaces={0} decimalSeparator='' thousandsSeparator=','/></span>
                <span className="boxes__recovered__name">recovered</span>
            </div>

            <div className="boxes__deaths">
                {/* <span className="boxes__deaths__value">{numberFormat.format(deaths)}</span> */}
                <span className="boxes__confirmed__value"><CountUp className="boxes__confirmed__value" isCounting end={deaths} duration={1.4} decimalPlaces={0} decimalSeparator='' thousandsSeparator=','/></span>
                <span className="boxes__deaths__name">deaths</span>
            </div>
            
        </div>
    )
}

export default Box
