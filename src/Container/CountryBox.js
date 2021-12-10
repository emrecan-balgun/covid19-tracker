import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeConfirmed, changeRecovered, changeDeaths, changeLastUpdate, country, currentConfirmed, currentRecovered, currentDeaths, currentLastUpdate } from '../redux/covidSlice';
import axios from 'axios';
import Moment from 'react-moment';

function CountryBox() {
    const numberFormat = new Intl.NumberFormat('en-us');
    const countryName = useSelector(country);
    const confirmed = useSelector(currentConfirmed);
    const recovered = useSelector(currentRecovered);
    const deaths = useSelector(currentDeaths);
    const lastUpdate = useSelector(currentLastUpdate);
    const dispatch = useDispatch();

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api/countries/turkey`)
        .then(response => dispatchData(response.data))
    }, []);

    function dispatchData(response) {
        dispatch(changeConfirmed(response.confirmed.value));
        dispatch(changeRecovered(response.recovered.value));
        dispatch(changeDeaths(response.deaths.value));
        dispatch(changeLastUpdate(response.lastUpdate));
    }

    return (
        <div className="countryBox">
            <div className="countryBox__information">
                <span className="countryBox__information__country">{countryName}</span>
                <span className="countryBox__information__time"><Moment format="Do MMM YYYY, hh:mm:ss">{lastUpdate}</Moment></span>
            </div>
            <div className="countryBox__confirmed">
                <span className="countryBox__confirmed__value">{numberFormat.format(confirmed)}</span>
                <span className="countryBox__confirmed__name">confirmed</span>
            </div>
            <div className="countryBox__recovered">
                <span className="countryBox__recovered__value">{numberFormat.format(recovered)}</span>
                <span className="countryBox__recovered__name">recovered</span>
            </div>
            <div className="countryBox__deaths">
                <span className="countryBox__deaths__value">{numberFormat.format(deaths)}</span>
                <span className="countryBox__deaths__name">deaths</span>
            </div>
        </div>
    )
}

export default CountryBox
