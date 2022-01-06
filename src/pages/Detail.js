import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import useCountry from '../hooks/useCountry';

const Detail = () => {
  const { setFilteredCountries, countries } = useContext(CountriesContext);
  const { code } = useParams();
  const { country, borders, countryLoading, bordersLoading } = useCountry(
    code,
    countries
  );

  const navigate = useNavigate();

  if (countryLoading || bordersLoading) return <div>loading...</div>;

  const currencies = country.currencies.map((c) => c.name).join(', ');
  const languages = country.languages.map((l) => l.name).join(', ');

  return (
    <div>
      <button
        onClick={() => {
          setFilteredCountries([]);
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>
        <img src={country.flags.png} alt={`${country.name} flag`} />
        <div>
          <h2>{country.name}</h2>

          <div>
            <div>
              <p>
                <span>Native name: </span>
                {country.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub region: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>

            <div>
              <p>
                <span>Top level domain: </span>
                {country.topLevelDomain.join(', ')}
              </p>
              <p>
                <span>Currencies: </span>
                {currencies}
              </p>
              <p>
                <span>Languages: </span>
                {languages}
              </p>
            </div>
          </div>

          <div>
            <span>Border countries: </span>{' '}
            {borders.map((b) => {
              return <div key={b}>{b}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
