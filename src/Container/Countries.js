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
        placeholder = {selected}
        showSelectedLabel={true}
        showOptionLabel={true}
        searchable = {true}
        // blacklistCountries={true}
        searchPlaceholder = "Search countries"
        className="countries"
        selectButtonClassName="countries__item"
        />
    )
}

export default Countries
