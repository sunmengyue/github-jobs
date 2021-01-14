import React from 'react';
import '../css/Search.css';

const Search = ({ onSearch }) => {
  return (
    <div id='search-container'>
      <input
        className='form-control'
        type='text'
        placeholder='&#xf0b1; &nbsp;Title, companies, expertise, or benefits'
        autoFocus
      />
      <button className='search-button' type='submit' onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
