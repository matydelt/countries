import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';



export default function Landing() {

  return (
    <div className="landing">
      <Link to='/home'>
        <button className="thar-three" >Ingresar</button>
      </Link>  
    </div>
  );
};

