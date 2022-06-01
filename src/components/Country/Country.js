import React, { useEffect, useState } from 'react';
import CountryEle from '../CountryEle/CountryEle';

const Country = () => {
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            {
                country.map((singleCountry)=>{
                    return(
                        <div>
                            <CountryEle countryInfo={singleCountry}></CountryEle>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Country;