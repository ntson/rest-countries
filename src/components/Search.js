import { useContext, useState } from 'react';
import { CountriesContext } from '../context/CountriesContext';

const Search = () => {
  const { countries, setFilteredCountries } = useContext(CountriesContext);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = countries.filter((c) => {
      return (
        c.name.toLowerCase().includes(search.toLowerCase()) &&
        c.region.toLowerCase().includes(region.toLowerCase())
      );
    });

    setFilteredCountries(filtered);
    setSearch('');
    setRegion('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country"
      />
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
