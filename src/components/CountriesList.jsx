import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'

export class CountriesList extends Component {
    render() {
        return (
            <div>
            <h2>Countries List:</h2>
            {countries.map((country, index) => {
              return (
                <div key={index}>
                  <h3>
                  <Link to={`/${country.cca3}`}>{country.name.official}</Link>
                  </h3>
                </div>
              )
            })}
        </div>

        )
    }
}

export default CountriesList
