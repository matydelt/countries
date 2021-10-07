import React from 'react';
import { Link } from 'react-router-dom';
import "./pagination.css"

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {    
    pageNumbers.push(i);
  }


  return (
   
      <div className='pagination'>
        {pageNumbers.map(number => (
            <Link key={number} to="/home/!#">
          <div className='page' onClick={() => paginate(number)} >
            <p>{number}</p>
            
          </div>
            </Link>
        ))}
      </div>
    
  );
};

export default Pagination;