import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card (props) {
    return (
      <div >           
          <Link to={`/country/${props.id}`}>
            <h5 >{props.name}</h5>
          </Link>          
          <div >            
            <div>              
              <p>{props.continent}</p>
            </div>
            <div >
              <img   width="250" height="150" alt="" />
            </div>
          </div>
        
      </div>
    );
};