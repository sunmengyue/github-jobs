import React from 'react';
import '../css/Side.css';

const Side = () => {
  return (
    <div id='side-bar'>
      <label className='checkbox-container'>
        Full time
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label>

      <div className='location-input'>
        <p>Location</p>
        <input
          className='form-control'
          type='text'
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
