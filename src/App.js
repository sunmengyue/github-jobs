import React, { useState } from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import Search from './components/Search';
import Side from './components/Side';
import Joblist from './components/Joblist';
import Pagination from './components/Pagination';
import './css/App.css';

const App = () => {
  const [terms, setTerms] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(terms, page);
  const [postsPerPage, setPostsPerPge] = useState(5);

  // Get job posts on current page
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className='container'>
      {loading && <h1>is Loading</h1>}
      {error && <h1>error, Try refreshing</h1>}
      <h1>
        <span>Github</span> Jobs
      </h1>
      <Search />
      <main>
        <Side />
        <Joblist jobs={currentPosts} />
      </main>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={jobs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
