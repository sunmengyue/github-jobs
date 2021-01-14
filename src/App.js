import React, { useState } from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import Search from './components/Search';
import Side from './components/Side';
import Joblist from './components/Joblist';
import Pagination from './components/Pagination';
import './css/App.css';

const App = () => {
  const [terms, setTerms] = useState({});
  const [page, setPate] = useState(1);
  const { jobs, loading, error } = useFetchJobs({ terms, page });

  return (
    <div className='container'>
      {loading && <h1>is Loading</h1>}
      {error && <h1>error, Try refreshing</h1>}

      <h1>
        <span>Github</span> Jobs
      </h1>
      <Search />
      <Side />
      <Joblist jobs={jobs} />
      <Pagination />
    </div>
  );
};

export default App;
