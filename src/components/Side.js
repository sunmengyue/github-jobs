import React from 'react';
import '../css/Side.css';

const Side = ({ terms, onTermChange }) => {
  return (
    <div id='side-bar'>
      <label className='checkbox-container'>
        Only Full Time
        <input
          type='checkbox'
          onChange={onTermChange}
          value={terms.full_time}
          name='full_time'
        />
        <span className='checkmark'></span>
      </label>

      <div className='location-input'>
        <p>Location</p>
        <input
          className='form-control'
          type='text'
          name='location'
          value={terms.location}
          placeholder='&#xf0ac; &nbsp;city, state, zip code, or country'
          autoFocus
        />
      </div>

      <div className='default-locations'>
        <label className='location'>
          London
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='location'>
          Amsterdam
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='location'>
          New York
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='location'>
          Berlin
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
      </div>
    </div>
  );
};

export default Side;
