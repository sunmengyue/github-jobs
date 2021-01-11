import React from 'react';
import '../css/Search.css';

const Search = () => {
  return (
    <div id='search-container'>
      <input
        className='form-control'
        type='text'
        placeholder='&#xf0b1; &nbsp;Title, companies, expertise, or benefits'
        autoFocus
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </div>
  );
};

export default Search;
