import { Link } from 'react-router-dom';
import Annotation from './Annotation';

const CountryCard = ({ country }) => {
  return (
    <section className="bg-white shadow-md rounded-lg overflow-hidden max-w-[350px]">
      <img
        src={country.flags.png}
        alt={`${country.name} flag`}
        className="w-full h-1/2 mb-4"
      />
      <div className="p-6 flex flex-col gap-2">
        <h2 className="font-extrabold text-lg">{country.name}</h2>
        <div>
          <p className="">
            <Annotation>Population: </Annotation>
            {country.population}
          </p>
          <p>
            <Annotation>Region: </Annotation>
            {country.region}
          </p>
          <p>
            <Annotation>Capital: </Annotation>
            {country.capital}
          </p>
        </div>
        <Link className="text-blue-600 underline" to={`/${country.alpha2Code}`}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default CountryCard;
