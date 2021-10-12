import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

export default function Cards({ countries }) {

    return (
      <div className="cards">
        {countries.map((countries)=>(     
            <div key={countries.id} className='card'>           
            <Link to={`/country/${countries.id}` }>
              <h4  >{countries.name}</h4>
            </Link>          
            <div >            
              <div>              
                <p>{countries.continent}</p>
              </div>
              <div >
                <img  src={countries.nationalFlag}  alt="" />
              </div>
            </div>
          
        </div>))}
      </div>    
    );
 
};