import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countriesList from '../countries.json'

export class CountriesList extends Component {
    render() {
        return (
         <div>
            <h2>Countries List:</h2>
            {countriesList.map((country, index) => {
              return (
                <div key={index}>
                  <Link to={`/${country.cca3}`} key={country.cca3}>
                    <span role='img'>{country.flag}</span>
                    {country.name.common}
                  </Link>
                </div>
              )
            })}
         </div>
        )
    }
}

export default CountriesList
