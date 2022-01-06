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
    <form
      onSubmit={handleSearch}
      className="pb-4 px-4 flex flex-col gap-4 items-start md:flex-row"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country"
        className="p-2 w-full rounded-md shadow-md outline-none"
      />
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="bg-white w-full shadow-md p-2 rounded-md md:max-w-xs"
      >
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button
        className="bg-white p-2 rounded-md w-full shadow-md active:shadow-none md:max-w-xs"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
