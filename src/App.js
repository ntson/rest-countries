import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
