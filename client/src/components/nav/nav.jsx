import React from "react";
import { COUNTRIES } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { filterByCOA, filterOrderName, filterOrderArea,filterByAct } from "../../functions/filters";
import "./nav.css";
import { Link } from "react-router-dom";

export const Nav = (props) => {
    const dispatch = useDispatch();
    let order = false
    let orderByArea = false
    const handleSubmitAct = (e)=>{  
        filterByAct(e.target.value,props.countries,props.activities,dispatch)        
    }
    const  handleSubmit =async (e) => {
        e.preventDefault()
        let countries = [];        
        countries = await filterByCOA(props.countries, e.target.value) 
            dispatch({
                type: COUNTRIES,
                payload: countries
            })
    }
    const handleOnClickAToZ = (e) => {
        e.preventDefault()
        if (order === false)
            order = !order
        filterOrderName(props.countries, order)
        dispatch({
            type: COUNTRIES,
            payload: [...props.countries]
        })

    }
    const handleOnClickZToA = (e) => {
        e.preventDefault()
        if (order === true)
            order = !order
        filterOrderName(props.countries, order)
        dispatch({
            type: COUNTRIES,
            payload: [...props.countries]
        })

    }
    const handleOnClickAreaAs = (e) => {
        e.preventDefault()
        if (orderByArea === false)
            orderByArea = !orderByArea
        filterOrderArea(props.countries, orderByArea)
        dispatch({
            type: COUNTRIES,
            payload: [...props.countries]
        })
    }
    const handleOnClickAreaDes = (e) => {
        e.preventDefault()
        if (orderByArea === true)
            orderByArea = !orderByArea
        filterOrderArea(props.countries, orderByArea)
        dispatch({
            type: COUNTRIES,
            payload: [...props.countries]
        })
    }    
    return (
        <div className="div-nav">
            <Link to="/activity">
            <button>Crear actividad</button>
            </Link>
            <button onClick={handleOnClickAreaAs}>ordered by area ↥</button>
            <button onClick={handleOnClickAreaDes}>ordered by area ↧</button>
            <button onClick={handleOnClickAToZ}>A-Z</button>
            <button onClick={handleOnClickZToA}>Z-A</button>
            <button onClick={()=>props.a(props.b+1)}>Clear All</button>
            <div>

            <img  src="https://i.ibb.co/QHLJ2CL/logoOG.png" width="20%" height="20%" alt=""/>
            <h2>Henry Countries</h2>
            </div>
            
                <select onChange={handleSubmit}>
                    <option value={null} >filtrar por continente</option>
                    <option  value="Africa">Africa</option>
                    <option  value="Antarctic">Antarctic</option>
                    <option  value="Americas">Americas</option>
                    <option  value="Asia">Asia</option>
                    <option  value="Europe">Europe</option>
                    <option  value="Oceania">Oceania</option>
                </select>
                <select onChange={handleSubmitAct}>
                    <option value={null}>filtrar por Actividad turistica</option>
                    {props.activities.map(e=>
                       ( <option key={e.id} value={e.id}>{e.name}</option>)
                    )}               
                </select>
            
        </div>
    );
};


const mapStateToProps = (state) => ({
    countries: state.countriesLoaded,
    activities: state.activitiesLoaded,
    
})
export default connect(mapStateToProps, {})(Nav)
