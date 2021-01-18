import React from 'react';
import '../css/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNums.map((num) => (
          <li className='page-item' key={num}>
            <a href='!#' className='page-link' onClick={() => paginate(num)}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
