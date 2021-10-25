import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

export default function Cards({ countries }) {

  return (
    <div className="cards">
      {countries.map((countries) => (
        <div key={countries.id} className='card'>
            <h4  >{countries.name}</h4>
          <div >
            <div>
              <p>{countries.continent}</p>
            </div>
            <div className='div-img'>
              <img src={countries.nationalFlag} className='img-card' alt="" />
            </div>
            <Link to={`/country/${countries.id}`}>
              <div class="box-3">
              <div class="btn-three">
                <span>Info</span>
              </div>
            </div></Link>           
          </div>
        </div>))}
    </div>
  );

};