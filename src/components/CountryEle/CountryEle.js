import React from 'react';

const CountryEle = (props) => {
    const {name,area,capital,currencies,population,languages} = props.countryInfo;
    return (
        <div className='countryStyle'>
            <h4>Country Name {name.common}</h4>
            <h4>Country area {area}</h4>
            <h4>Country capital {capital}</h4>
            <h4>Country population {population}</h4>
        </div>
    );
};

export default CountryEle;