import React, { useEffect } from 'react';
import { connect  } from 'react-redux';
import Cards from '../cards/cards';
import './home.css';
import { getCountries } from '../../redux/actions';



 export  function Home({getCountries,countries}) {
useEffect(()=>{
 getCountries()
},[])
// console.log(props)
  return (    
    <div className="principal">
      <div></div>
      <button>Ordenar por poblacion</button>
      <Cards countries={countries}/>
      <div></div>
    </div>    
  );
};
const mapStateToProps=(state) =>({
 countries :state.countriesLoaded,
})
export default connect(mapStateToProps,{getCountries})(Home)