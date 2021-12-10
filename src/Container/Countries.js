import { useState, useEffect } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'

function Countries() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all')
        .then(response => setCountries(response.data))
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false))
    }, []);


    return (
        <select className="countries" defaultValue={'default'}>
            {
                isLoading ? <option className="countries__loading" value="default">Loading..</option> : <option value="default" disabled  hidden>Global</option>
            }
            {
                countries.map(country => <option key={nanoid()} className="countries__item" value={country.name.common}>{country.name.common}</option>)
            }
        </select>
    )
}

export default Countries
