import React from 'react';
import { COUNTRYID } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './cards.css';

export default function Cards({ countries }) {
  const dispatch=useDispatch();
const handleClick=(e)=>{
  dispatch({
    type: COUNTRYID,
    payload: e.target.value
  })
}
    return (
      <div className="cards">
        {countries.map((countries)=>(     
            <div key={countries.id} className='card'>           
            <Link to={`/country/${countries.id}` }>
              <h5 onClick={handleClick} value={countries.id}>{countries.name}</h5>
            </Link>          
            <div >            
              <div>              
                <p>{countries.continent}</p>
              </div>
              <div >
                <img  src={countries.nationalFlag} width="80%" height="60%" alt="" />
              </div>
            </div>
          
        </div>))}
      </div>    
    );
 
};