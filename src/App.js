import React from 'react';
import Search from './components/Search';
import Side from './components/Side';
import Joblist from './components/Joblist';
import Pagination from './components/Pagination';
import './css/App.css';

const App = () => {
  return (
    <div className='container'>
      <h1>
        <span>Github</span> Jobs
      </h1>
      <Search />
      <Side />
      <Joblist />
      <Pagination />
    </div>
  );
};

export default App;
