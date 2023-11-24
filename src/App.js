
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Details from './components/Details';

import Movierow from './components/Movierow';
import TvDetails from './components/TvDetails';





function App() {
  return (
    <div className="App bg-black">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='main/' element={<Main />} />
        <Route path='movierow/' element={<Movierow />} />
        <Route path='/deatils/:id' element={<Details />} />
        <Route path='/tvdetails/:id' element={<TvDetails />} />


      </Routes>
    </div>
  );
}

export default App;
