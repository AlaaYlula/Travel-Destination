import './App.css';

import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails'

import { Routes, Route } from 'react-router-dom'
import data from './data/db.json';


function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails data={data}/> } />
      </Routes>
    </>
  );
}

export default App;
