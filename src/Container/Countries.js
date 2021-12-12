// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { nanoid } from 'nanoid'
// import { useDispatch, useSelector } from 'react-redux'
// import { changeCountry, changeCountries, countries } from '../redux/covidSlice';

// function Countries() {
//     const [isLoading, setIsLoading] = useState(true);
//     const countriesArray = useSelector(countries);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         axios('https://restcountries.com/v3.1/all')
//         .then(response => dispatchData(response.data))
//         .catch(e => console.log(e))
//         .finally(() => setIsLoading(false))
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     function dispatchData(response) {
//         dispatch(changeCountries(response));
//     }

//     return (
//         <select className="countries" defaultValue={'default'} onChange={e => dispatch(changeCountry(e.target.value))}>
//             {
//                 isLoading ? <option className="countries__loading" value="default">Loading..</option> : <option value="default" disabled  hidden>Global</option>
//             }
//             {
//                 countriesArray.map(country => <option key={nanoid()} className="countries__item" value={country.name.common}>{country.name.common}</option>)
//             }
//         </select>
//     )
// }

// export default Countries

import { useState, useEffect } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useDispatch } from 'react-redux'
import { changeCountry } from '../redux/covidSlice';
import {countries} from 'country-data';


function Countries() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        dispatch(changeCountry(selected))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <ReactFlagsSelect
        selected={selected}
        onSelect={code => setSelected(countries[code].name)}
        searchable
        // blacklistCountries
        searchPlaceholder = "Search countries"
        className="countries"
        selectButtonClassName="countries__item"
        />
    )
}

export default Countries
