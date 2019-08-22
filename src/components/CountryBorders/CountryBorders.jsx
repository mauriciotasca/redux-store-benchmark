import React, { useEffect } from 'react';
// import TodoItem from './TodoItem';
import { useSelector, useActions } from 'react-redux';
import { setCountry, changeAlphaCode } from '../../redux';

const CountryBorders = () => {
  const country = useSelector((state) => state.country, null);
  const actions = useActions({setCountry, changeAlphaCode}, null);

  async function fetchMyAPI(countryAlphaCode = 'BRA') {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryAlphaCode}`
    );
    actions.setCountry(await response.json());
  }

  useEffect(() => {
    if(country.alpha3Code){
      fetchMyAPI(country.alpha3Code);
    }
  }, [country.alpha3Code]);

  return (
    <>
      <img style={{width:20}} src={country.flag || ''} />
      <button
        onClick={() => actions.changeAlphaCode({ alpha3Code: 'BRA' })}
      >Start with Brazil</button>
      <ul className="country-list">
        {country.borders && country.borders.map((border) => (
          <li
            key={border}
            onClick={() => actions.changeAlphaCode({ alpha3Code: border })}
          >
            {border}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryBorders;
