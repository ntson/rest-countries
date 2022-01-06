import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';

const CountryList = () => {
  const { countries, filteredCountries } = useContext(CountriesContext);

  const result = filteredCountries.length > 0 ? filteredCountries : countries;

  return (
    <main className="grid gap-24 grid-cols-auto-fit px-4 w-full mt-10">
      {result.map((c) => {
        return <CountryCard country={c} key={c.alpha2Code} />;
      })}
    </main>
  );
};

export default CountryList;
