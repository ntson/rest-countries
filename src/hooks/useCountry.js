import { useState, useEffect } from 'react';

const useCountry = (code, countries) => {
  const [country, setCountry] = useState({
    borders: [],
    currencies: [{ name: '' }],
    languages: [{ name: '' }],
    flags: { png: '' },
    topLevelDomain: [],
  });
  const [countryLoading, setCountryLoading] = useState(true);
  const [borders, setBorders] = useState([]);
  const [bordersLoading, setBordersLoading] = useState(true);

  useEffect(() => {
    if (countries.length > 0) {
      const currentCountry = countries.find(
        (c) => c.alpha2Code.toLowerCase() === code.toLowerCase()
      );

      setCountry(currentCountry);
      setCountryLoading(false);
    } else {
      fetch(`https://restcountries.com/v2/alpha/${code}`)
        .then((res) => res.json())
        .then((c) => {
          setCountry(c);
          setCountryLoading(false);
        })
        .catch(console.log);
    }
  }, [code, countries]);

  useEffect(() => {
    if (countries.length > 0) {
      const currentBorderCountries = countries.filter((c) => {
        return country.borders.includes(c.alpha3Code);
      });

      setBorders(currentBorderCountries.map((c) => c.name));
      setBordersLoading(false);
    } else {
      Promise.all(
        country.borders.map((b) => {
          return fetch(`https://restcountries.com/v2/alpha/${b}`)
            .then((res) => res.json())
            .then((c) => c.name);
        })
      ).then((b) => {
        setBorders(b);
        setBordersLoading(false);
      });
    }
  }, [country.borders, countries]);

  return { country, borders, countryLoading, bordersLoading };
};

export default useCountry;
