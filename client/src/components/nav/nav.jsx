import React from "react";
import { connect } from "react-redux";
import { setOrderCountriesByName,setOrderCountriesByArea } from "../../redux/actions";
import "./nav.css";

export const Nav = (props) => {
    const [order,setBool]= React.useState(false);
    const [orderByArea, setOrderByArea]= React.useState(false);
    const handleOnClick= (e)=>{
    
        setBool(!order)
        props.setOrderCountriesByName(order)
    }
    const handleOnClickArea= (e)=>{           
        setOrderByArea(!orderByArea)
        props.setOrderCountriesByArea(orderByArea)
    }
    const handleOnChange=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div>
            <button
                onClick={handleOnClick}
                className="btn-nav">
                ordered by name
            </button>
            <button className="btn-nav"
                onClick={handleOnClickArea}>
                ordered by area
            </button>
            <input />
        </div>
    );
};
const mapStateToProps = (state) => ({
    countries: state.countriesLoaded,
})
export default connect(mapStateToProps, { setOrderCountriesByName,setOrderCountriesByArea })(Nav)
