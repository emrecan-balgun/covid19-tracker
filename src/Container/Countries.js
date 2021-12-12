import { useState, useEffect } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useDispatch } from 'react-redux'
import { changeCountry, changeShow } from '../redux/covidSlice';
import { countries } from 'country-data';


function Countries() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        dispatch(changeCountry(selected))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    function takeAction(code) {
        setSelected(countries[code].name)
        dispatch(changeShow(true));
    }

    return (
        <ReactFlagsSelect
        selected={selected}
        onSelect={code => takeAction(code)}
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
