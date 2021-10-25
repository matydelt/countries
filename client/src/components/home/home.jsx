import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../cards/cards';
import './home.css';
import Pagination from '../pagination/pagination';
import Nav from '../nav/nav';
import { getCountries } from '../../redux/actions';



export function Home({ getCountries, countries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  const [clearAll, setClearAll] = useState(0);

  useEffect(() => {
    getCountries()
  }, [clearAll, getCountries])
  if (!Array.isArray(countries)) {
    getCountries()
    return (<h2>Loading...</h2>)
  };

  const indexOfLastPost = currentPage * countriesPerPage;
  const indexOfFirstPost = indexOfLastPost - countriesPerPage;
  let currentCountries

  if (indexOfFirstPost === 0) {
    currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost - 1);
  } else {
    currentCountries = countries.slice(indexOfFirstPost - 1, indexOfLastPost - 1);
  }
  const paginate = countryNumber => setCurrentPage(countryNumber);
  return (
    <div className="principal">

      <Nav countries={currentCountries} a={setClearAll} b={clearAll} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <Cards countries={currentCountries} />

    </div>
  );
};
const mapStateToProps = (state) => ({
  countries: state.countriesLoaded,
})
export default connect(mapStateToProps, { getCountries })(Home)