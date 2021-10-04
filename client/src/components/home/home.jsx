import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../cards/cards';
import './home.css';
import Pagination from '../pagination/pagination';
import Nav from '../nav/nav';
// import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/actions';



export function Home({ getCountries, countries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage ] = useState(10);
  
  useEffect(() => {
    getCountries()    
  },[getCountries])
  if(countries.length<=0) return <h2>Loading...</h2>;  
  
  const indexOfLastPost= currentPage * countriesPerPage;
  const indexOfFirstPost = indexOfLastPost - countriesPerPage;
  let currentCountries
  if(indexOfFirstPost===0){
    currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost-1);
  }else{
    currentCountries = countries.slice(indexOfFirstPost-1, indexOfLastPost-1);
  }
  const paginate = countryNumber => setCurrentPage(countryNumber);
 
  return (
    <div className="principal">
      <div className="columnLeft"></div>
      <Nav />
      <Cards countries={currentCountries}  />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <div className="columnRigth"></div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  countries: state.countriesLoaded,
})
export default connect(mapStateToProps, { getCountries })(Home)