/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
// import { getById } from "../../functions/api";
import { getCountry } from "../../redux/actions";
import "./about.css"

export const About =  ({getCountry,country}) => {
    const param = useParams();
    let id= param.id;
   
    useEffect(()=>{
        getCountry(id)
    },[getCountry, id])
    
if(!country)return <h2>loading...</h2>
  return (
    <div className="card-about" key={country.id}>
        <Link to="/home"><img className="img-about" src="https://i.ibb.co/QHLJ2CL/logoOG.png" /></Link>
      <h1>{country.name}</h1> 
      <h4>{country.id}</h4>
      <h3>{country.capital}</h3>
      <h2>{country.subRegion}</h2>
      <img src={country.nationalFlag} />
      <h4>{country.area}km2</h4>
      <div className="div-act">
      {country.activities?.map((e)=>{return (
          <div key={e.id} className="card-act"> 
              <h1>{e.name}</h1>
              <h2>dificultad: {e.difficulty}</h2>
              <h3>{e.duration}</h3>
              <h4>{e.station}</h4>
          </div>)
         
      })}
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>({
    country:state.country
})
export default  connect(mapStateToProps,{getCountry})(About) ;

