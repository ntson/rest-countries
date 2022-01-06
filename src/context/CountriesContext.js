import { createContext, useEffect, useState } from 'react';

export const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((c) => {
        setCountries(c);
      })
      .catch(console.log);
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
