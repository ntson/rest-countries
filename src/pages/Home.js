import CountryList from '../components/CountryList';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="py-10">
      <Search />
      <CountryList />
    </div>
  );
};

export default Home;
