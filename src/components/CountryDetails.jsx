import React from 'react';
import { Link } from 'react-router-dom';
import countriesList from '../countries.json'

const CountryDetails = (props) => {
  const countryCode = props.match.params.cca3;
  const country = countriesList.find(country => country.cca3 === countryCode)
  
  return (
      <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders &&
                  country.borders.map((borderCode, index) => {
                    const borderCountry = countriesList.find(country => country.cca3 === borderCode);
                    return (
                      <li key={borderCode}>
                        <Link to={`/${borderCode}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails