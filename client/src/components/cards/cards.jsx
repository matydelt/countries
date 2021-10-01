import React from 'react';
import Card from '../card/card';
import './cards.css';

export default function Cards({ countries }) {
  if (countries.length > 0) { //className={`${s.list}`}
    return (<div >
      
        {countries.map((country) => (
          <Card name={country.name}
            flag={country.nationalFlag}
            continent={country.continent}
            id={country.id}
          />

        ))}
      
    </div>
    );
  }
  return (
    <div></div>
  )
};