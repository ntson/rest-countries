import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import Annotation from '../components/Annotation';
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
    <div className="bg-gray-100 h-screen p-10 flex flex-col gap-20 items-start">
      <button
        onClick={() => {
          setFilteredCountries([]);
          navigate(-1);
        }}
        className="bg-white rounded-md py-2 px-4 shadow-md w-1/3 outline-none max-w-[150px]"
      >
        Back
      </button>
      <div className="flex flex-col gap-10 w-full h-full md:flex-row md:gap-32 md:items-center">
        <img
          src={country.flags.png}
          alt={`${country.name} flag`}
          className="md:w-2/5 md:h-3/6"
        />
        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold text-2xl">{country.name}</h2>

          <div className="flex flex-col gap-10 md:flex-row w-full">
            <div>
              <p>
                <Annotation>Native name: </Annotation>
                {country.nativeName}
              </p>
              <p>
                <Annotation>Population: </Annotation>
                {country.population}
              </p>
              <p>
                <Annotation>Region: </Annotation>
                {country.region}
              </p>
              <p>
                <Annotation>Sub region: </Annotation>
                {country.subregion}
              </p>
              <p>
                <Annotation>Capital: </Annotation>
                {country.capital}
              </p>
            </div>

            <div>
              <p>
                <Annotation>Top level domain: </Annotation>
                {country.topLevelDomain.join(', ')}
              </p>
              <p>
                <Annotation>Currencies: </Annotation>
                {currencies}
              </p>
              <p>
                <Annotation>Languages: </Annotation>
                {languages}
              </p>
            </div>
          </div>

          <div>
            <Annotation>Border countries: </Annotation>{' '}
            {borders.length > 0 ? borders.join(', ') : 'None'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
