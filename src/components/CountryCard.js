import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <section>
      <img src={country.flags.png} alt={`${country.name} flag`} />
      <h2>{country.name}</h2>
      <p>
        <span>Population: </span>
        {country.population}
      </p>
      <p>
        <span>Region: </span>
        {country.region}
      </p>
      <p>
        <span>Capital: </span>
        {country.capital}
      </p>
      <Link to={`/${country.alpha2Code}`}>Learn more</Link>
    </section>
  );
};

export default CountryCard;
