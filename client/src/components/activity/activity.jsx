/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import { postAct } from "../../functions/api";
import "./activity.css";


const Activity = ({ getCountries }) => {
  const countries = useSelector(state => state.countriesLoaded)
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    station: "",
    duration: "",
    countries: [],
  });
  const [error, setError] = useState({
    general: "",
    name: "",
    difficulty: "",
    station: "",
    duration: "",
    countries: "",
  });

  useEffect(() => {
    if (countries.length <= 0) {
      getCountries()
    }
  }, [countries.length, getCountries])
  const handleChangeName = (e) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setInput(newInput);
    setError({ error, [e.target.name]: "" })

  };

  const handleChangeDifficulty = (e) => {

    const newInput = { ...input, [e.target.name]: e.target.value };
    // eslint-disable-next-line no-mixed-operators
    if (e.target.value > 5 && e.target.value !== "" || e.target.value < 1 && e.target.value !== "") alert("solo se aceptan valores de 1 a 5")
    else {
      setInput(newInput);
      setError({ error, [e.target.name]: "" })

    }

  };
  const handleChangeStation = (e) => {

    const newInput = { ...input, [e.target.name]: e.target.value };
    setInput(newInput);
    setError({ error, [e.target.name]: "" })


  };
  const handleChangeDuration = (e) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setInput(newInput);
    setError({ error, [e.target.name]: "" })

  };
  const handleChangeCountry = (e) => {
    if (e.target.value !== "eliga un pais") {
      const newInput = { ...input, [e.target.name]: input.countries.push(e.target.value) };
      setInput(newInput);
      setError({ error, "countries": "" })

    }
  };
  const handleClick = (e) => {
    input.countries.pop();
    setInput({ ...input, "countries": input.countries })
    // setError({ error, "countries": "" })
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.duration !== "" || input.name !== "" || input.difficulty !== "" || input.station !== "" || input.countries.length > 0) {
      if (input.name !== "") {
        if (input.difficulty !== "") {
          if (input.station !== "") {
            if (input.duration !== "") {
              if (input.countries.length > 0) {

                postAct(input)
              } else {
                setError({ ...error, countries: "Debe elegir al menos 1 pais!", general: "Todos los campos son necesarios!" })


              }
            } else {
              setError({ ...error, duration: "Debe ingresar una duracion!", general: "Todos los campos son necesarios!" })


            }
          } else {
            setError({ ...error, station: "Debe ingresar una estacion!", general: "Todos los campos son necesarios!" })


          }
        } else {
          setError({ ...error, difficulty: "Debe ingresar una dificultad!", general: "Todos los campos son necesarios!" })

        }
      } else {
        setError({ ...error, name: "Debe ingresar un nombre", general: "Todos los campos son necesarios!" })

      }
    } else {
      setError({ ...error, general: "Todos los campos son necesarios!" })

    }
  };

  return (<div className="form">
    <div className="div-Form">
      <Link to="/home">
        <img className="img-form" src="https://i.ibb.co/QHLJ2CL/logoOG.png" />
      </Link>
      <h6 className="text-danger">{error.general}</h6>
      <form onSubmit={handleSubmit}>
        <Form
          label="Ingrese nombre de la Actividad"
          name="name"
          value={input.name}
          handleChange={handleChangeName}
          type="text"
        />
        <h6 className="text-danger">{error.name}</h6>
        <Form
          key="difficulty"
          label="Ingrese dificultad"
          name="difficulty"
          value={input.difficulty}
          type="number"
          handleChange={handleChangeDifficulty}
        />
        <p className="text-danger">{error.difficulty}</p>
        <label>Seleccione una estacion</label>
        <br></br>
        <select name="station" onChange={handleChangeStation} className="form-select" aria-label="Default select example">
          <option value="null">---</option>
          <option value="Invierno">Invierno</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Primavera">Primavera</option>
        </select>
        <h6 className="text-danger">{error.station}</h6>
        <Form
          label="Ingrese duracion de la actividad"
          name="duration"
          value={input.duration}
          handleChange={handleChangeDuration}
          type="text"
        />
        <h6 className="text-danger">{error.duration}</h6>
        <div>
          <label>ingrese pais</label>
          <select className="form-select form-select-lg mb-3" onChange={handleChangeCountry}>
            <option value={null}>eliga un pais</option>
            {countries.map((e) => { return (<option key={e.id} value={e.id}>{e.name}</option>) })}
          </select>
        </div>
        <h6 className="text-danger">{error.countries}</h6>
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
      {input.countries?.map((e) => {
        return (<h4 key={e}>{e}</h4>)
      })}
    </div>
  </div>

  );
};
const Form = ({ label, name, value, handleChange, type }) => {
  return (
    <div className="div-inp">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="inp"
      />
    </div>
  );
};


export default connect(null, { getCountries })(Activity)
