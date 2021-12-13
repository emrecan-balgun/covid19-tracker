import React from 'react'
import Box from './Box'
import Table from './Table'
import Header from './Header'
import CountryBox from './CountryBox'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGlobalConfirmed, changeGlobalRecovered, changeGlobalDeaths, changeGlobalLastUpdate, globalLastUpdate, show } from '../redux/covidSlice';
import axios from 'axios';
import Moment from 'react-moment';

function Information() {
    const dispatch = useDispatch();
    const lastUpdate = useSelector(globalLastUpdate);
    const isShow = useSelector(show);

    useEffect(() => {
        axios('https://covid19.mathdro.id/api')
        .then(response => dispatchData(response.data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function dispatchData(response) {
        dispatch(changeGlobalConfirmed(response.confirmed.value));
        dispatch(changeGlobalRecovered(response.recovered.value));
        dispatch(changeGlobalDeaths(response.deaths.value));
        dispatch(changeGlobalLastUpdate(response.lastUpdate));
    }

    return (
        <>
        <Header />
        <div className="information">
            <h2 className="information__title">Global Data</h2>
            <span className="information__time">Last update: <Moment format="Do MMM YYYY, hh:mm:ss">{lastUpdate}</Moment></span>
            <Box />
            <CountryBox />
            {
                isShow 
                ? <Table />
                : null
            }
        </div>
        </>
    )
}

export default Information
