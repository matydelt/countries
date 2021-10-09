/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries,postActivity } from "../../redux/actions";
import "./activity.css";


const Activity = ({getCountries,postActivity}) => {
  const countries = useSelector(state=> state.countriesLoaded)
//   console.log(props)
  const [errors, setErrors] = useState({
    name: "",
  difficulty: "",
  station: "",
  duration: "",
  countries: []});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    station: "",
    duration: "",
    countries: [],
  });
  useEffect(()=>{
      if(countries.length<=0){
          getCountries()
      }
  },[countries.length, getCountries])
  const handleChangeName = (e) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setErrors(validate(newInput));
    setInput(newInput);
  };

  const handleChangeDifficulty = (e) => {
      
      const newInput = { ...input, [e.target.name]: e.target.value };
      setErrors(validate(newInput));
      // eslint-disable-next-line no-mixed-operators
      if(e.target.value>5 && e.target.value!==""||e.target.value<1&&e.target.value!=="")alert("solo se aceptan valores de 1 a 5")
      else{
          setInput(newInput);
      }
      
  };
  const handleChangeStation = (e) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setErrors(validate(newInput));
    setInput(newInput);
  };
  const handleChangeDuration = (e) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setErrors(validate(newInput));
    setInput(newInput);
  };
  const handleChangeCountry = (e) => {
      if(e.target.value!=="eliga un pais"){
    const newInput = { ...input, [e.target.name]: input.countries.push(e.target.value)};
    setErrors(validate(newInput));
    setInput(newInput);}
  };
  const handleClick = (e) => {
    input.countries.pop();
    setInput({...input,"countries":input.countries})    
};
  const handleSubmit = (e) => {
      e.preventDefault()
      if(input.station==="verano"||input.station==="otoño"||input.station==="primavera"||input.station==="invierno"){
        if(input.duration){
          if(input.countries.length>0){
            if(input.name.length>2){

              postActivity(input)
            }else{
              alert("debe tener  nombre con al menos 3 caracteres")
            }
          }else{
            alert("debe agregar al menos 1 pais")
          }
        }else{
          alert("debe ingresar la duracion")
        }
      }else{
        alert("estacion erronea")
      }
  };
  
  return (<div className="form">
      <div className="div-Form">
      <Link to="/home">
        <img className="img-form" src="https://i.ibb.co/QHLJ2CL/logoOG.png" />
      </Link>
      <form onSubmit={handleSubmit}>
        <Form
          label="Ingrese nombre de la Actividad"
          name="name"
          value={input.name}
          handleChange={handleChangeName}
        />
        <Form
          key="difficulty"
          label="Ingrese dificultad"
          name="difficulty"
          value={input.difficulty}
          handleChange={handleChangeDifficulty}
        />
        <Form
          label="Ingrese estacion"
          name="station"
          value={input.station}
          handleChange={handleChangeStation}
        />
        <Form
          label="Ingrese duracion de la actividad"
          name="duration"
          value={input.duration}
          handleChange={handleChangeDuration}
        />
        <div>          
          <label>ingrese pais</label>
          <select className="select-country" onChange={handleChangeCountry}>
              <option value={null}>eliga un pais</option>
          {countries.map((e)=>{return (<option key={e.id} value={e.id}>{e.name}</option>)})}
          </select>
        </div>
        <input className="btn-form" type="submit" />
      </form>
      <button className="btn-form" onClick={handleClick}>-</button>
    </div>
    <div className="act">
        <h1>Previsualizacion</h1>
        <h2>{input.name}</h2>
        <h3>{input.difficulty}</h3>
        <h3>{input.duration}</h3>
        <h3>{input.station}</h3>
        {input.countries?.map((e)=>{
        return (<h4 key={e}>{e}</h4>)})}
    </div>
  </div>
    
  );
};
const Form = ({ label, name, value, handleChange }) => {
  return (
    <div className="div-inp">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        className="inp"
      />
    </div>
  );
};
export const validate = function (input) {
  let errors = {}; 
  if (!input.difficulty) {
    errors.difficulty = "necesita una dificultad";
  } else if (input.difficulty>1||input.difficulty>5) {
    errors.difficulty = "dificultad invalida , solo acepta de 1 a 5";
  }
  return errors;
};
export default connect(null,{getCountries,postActivity})(Activity)
