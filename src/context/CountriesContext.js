import { createContext, useEffect, useState } from 'react';

export const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((c) => {
        setCountries(c);
        setLoading(false);
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
        loading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
