import React from 'react';
import '../css/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {
  const pages = Math.ceil(totalPosts / postsPerPage);
  const pageNums = [];
  for (let i = 1; i <= pages; i++) {
    pageNums.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {page !== 1 && (
          <li className='page-item'>
            <a className='page-link'>&#8249;</a>
          </li>
        )}
        {page > 2 && (
          <li className='page-item'>
            <a className='page-link'>...</a>
          </li>
        )}
        {pageNums.map((num) => (
          <li className='page-item' key={num}>
            <a href='!#' className='page-link' onClick={() => paginate(num)}>
              {num}
            </a>
          </li>
        ))}

        {page !== pages && (
          <li className='page-item'>
            {' '}
            <a className='page-link'>&#8250;</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
