import React, { useState } from "react";
import { COUNTRIES } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import {
  filterByC,
  filterOrderName,
  filterOrderArea,
  filterByAct,
  filterByName,
} from "../../functions/filters";
import "./nav.css";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(0);
  const dispatch = useDispatch();
  let order = false;
  let orderByArea = false;
  const handleChangeName = (e) => {
    const newInput = { ...name, name: e.target.value };
    setName(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.name) {
        const result = filterByName(name.name, props.countries);
      if (result.length > 0){
          dispatch({
            type: COUNTRIES,
            payload: result,
          });
      }else alert("no se encontro pais con ese nombre");
    } else alert("debe ingresar un nombre");
  };
  const handleSubmitAct = (e) => {
    setFlag(1);
    filterByAct(e.target.value, props.countries, props.activities, dispatch, props.countriesL);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    let countries = [];
    countries = await filterByC(props.countries, e.target.value, flag, props.countriesL,dispatch);
    dispatch({
      type: COUNTRIES,
      payload: countries,
    });
  };
  const handleOnClickAToZ = (e) => {
    e.preventDefault();
    if (order === false) order = !order;
    filterOrderName(props.countries, order);
    dispatch({
      type: COUNTRIES,
      payload: [...props.countries],
    });
  };
  const handleOnClickZToA = (e) => {
    e.preventDefault();
    if (order === true) order = !order;
    filterOrderName(props.countries, order);
    dispatch({
      type: COUNTRIES,
      payload: [...props.countries],
    });
  };
  const handleOnClickAreaAs = (e) => {
    e.preventDefault();
    if (orderByArea === false) orderByArea = !orderByArea;
    filterOrderArea(props.countries, orderByArea);
    dispatch({
      type: COUNTRIES,
      payload: [...props.countries],
    });
  };
  const handleOnClickAreaDes = (e) => {
    e.preventDefault();
    if (orderByArea === true) orderByArea = !orderByArea;
    filterOrderArea(props.countries, orderByArea);
    dispatch({
      type: COUNTRIES,
      payload: [...props.countries],
    });
  };
  return (
    <div className="div-nav">
      <Link to="/activity">
        <button className="btn-nav">Crear actividad</button>
      </Link>
      <button className="btn-nav" onClick={handleOnClickAreaAs}>ordered by area ↥</button>
      <button className="btn-nav" onClick={handleOnClickAreaDes}>ordered by area ↧</button>
      <button className="btn-nav" onClick={handleOnClickAToZ}>A-Z</button>
      <button className="btn-nav" onClick={handleOnClickZToA}>Z-A</button>
      <button className="btn-nav" onClick={() => props.a(props.b + 1, setFlag(0))}>
        Clear All
      </button>
      <div>
        <img
          src="https://i.ibb.co/QHLJ2CL/logoOG.png"
          width="20%"
          height="20%"
          alt=""
        />
        <h2>Henry Countries</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChangeName} name="name" />
          <input  type="submit" value="Search" className="btn-nav"/>
        </form>
      </div>
      <select onChange={handleChange}>
        <option value={null}>filtrar por continente</option>
        <option value="Africa">Africa</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select onChange={handleSubmitAct}>
        <option value={null}>filtrar por Actividad turistica</option>
        {props.activities.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countriesLoaded,
  activities: state.activitiesLoaded,
  countriesL: state.countries
});
export default connect(mapStateToProps, {})(Nav);
