import React from 'react'
import { useState } from 'react';
import Hero from '../HeroSection/Hero';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const TestEventos = () => {

    const [hidden, setHidden] = useState(true);

    function handleOnClick () {
        setHidden(s => !s)
    }

  return (
    <div>
      
      {!hidden ? < ItemCount /> : null}
      {hidden ? < Hero /> :null}
      <button onClick={handleOnClick}>
        react show hide component
      </button>
    </div>
  );
}

