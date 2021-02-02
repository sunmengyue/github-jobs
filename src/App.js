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
  const { jobs, loading, error, hasNextPage } = useFetchJobs(terms, page);
  const [postsPerPage, setPostsPerPge] = useState(10);

  // Get job posts on current page
  // const indexOfLastPost = page * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  function handleTermChange(e) {
    const term = e.target.name;
    const value = e.target.value;
    setPage(1);
    setTerms((prevTerms) => {
      return { ...prevTerms, [term]: value };
    });
  }

  return (
    <div className='container'>
      {loading && <h1>is Loading</h1>}
      {error && <h1>error, Try refreshing</h1>}
      <h1>
        <span>Github</span> Jobs
      </h1>
      <Pagination
        page={page}
        postsPerPage={postsPerPage}
        totalPosts={jobs.length}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
      <Search terms={terms} onTermChange={handleTermChange} />
      <main>
        <Side terms={terms} onTermChange={handleTermChange} />
        <Joblist jobs={jobs} />
      </main>
      <Pagination
        page={page}
        postsPerPage={postsPerPage}
        totalPosts={jobs.length}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default App;
