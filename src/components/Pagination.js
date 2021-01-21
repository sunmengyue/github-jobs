import React from 'react';
import '../css/Pagination.css';

const Pagination = ({
  postsPerPage,
  totalPosts,
  setPage,
  page,
  hasNextPage,
}) => {
  function adjustPage(num) {
    setPage((curPage) => curPage + num);
  }
  const pages = Math.ceil(totalPosts / postsPerPage);
  const pageNums = [];
  for (let i = 1; i <= pages; i++) {
    pageNums.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNums[0] !== page && (
          <li className='page-item'>
            <a className='page-link' onClick={() => adjustPage(-1)}>
              &#8249;
            </a>
          </li>
        )}
        {pageNums.map(
          (num) =>
            hasNextPage && (
              <li className='page-item' key={num}>
                <a
                  href='!#'
                  className={`${page === num && 'active'}`}
                  onClick={() => setPage(num)}
                >
                  {num}
                </a>
              </li>
            ),
        )}
        {hasNextPage && pageNums.reverse()[0] !== page && (
          <li className='page-item'>
            <a className='page-link' onClick={adjustPage(1)}>
              &#8250;
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
