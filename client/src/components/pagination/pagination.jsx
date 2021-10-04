import React from 'react';
import "./pagination.css"

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {    
    pageNumbers.push(i);
  }


  return (
   
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='page'>
            <a onClick={() => paginate(number)} href='/home/!#' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>
    
  );
};

export default Pagination;