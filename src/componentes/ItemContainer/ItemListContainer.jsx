import React from 'react'
import { useState, useEffect } from 'react';
import Super1 from '../../imgs/superman1.jpg';
import Super2 from '../../imgs/superman75.jpg';
import Flash1 from '../../imgs/flashpoint.jpg';
import Flash2 from '../../imgs/flash324.jpg';
import Aquaman1 from '../../imgs/Aquaman_de_Peter_David.jpg';
import Aquaman2 from '../../imgs/dc-aquaman-29.jpg';
import Thor1 from '../../imgs/thor274.jpg';
import Thor2 from '../../imgs/thor297.jpg';
import Iron1 from '../../imgs/iron_man126.jpg';
import Iron2 from '../../imgs/ironmam598.jpg';
import Capi1 from '../../imgs/calivinglegend1.jpg';
import Capi2 from '../../imgs/La-búsqueda-de-la-Gema-de-Sangre-portada.jpg';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
  const [comics, setComics]=useState([])

  useEffect(()=>{

    let comicsCatalogo = [
          {
              "id":"1",
              "titulo":"Action Comics 1",
              "imagen": Super1 ,
          },
          {
              "id":"2",
              "titulo":"Super Man 75: La muerte de Super Man",
              "imagen":Super2,
          },
          {
              "id":"3",
              "titulo":"Flashpoint",
              "imagen":Flash1,
          },
          {
              "id":"4",
              "titulo":"Flash 324: La muerte de Reverse Flash",
              "imagen":Flash2,
          },
          {
              "id":"5",
              "titulo":"Aquaman de Peter David",
              "imagen":Aquaman1,
          },
          {
              "id":"6",
              "titulo":"Aquaman 29",
              "imagen":Aquaman2,
          },
          {
              "id":"7",
              "titulo":"Thor 274",
              "imagen":Thor1,
          },
          {
              "id":"8",
              "titulo":"Thor 297",
              "imagen":Thor2,
          },
          {
              "id":"9",
              "titulo":"The Invincible Iron Man 126",
              "imagen":Iron1,
          },
          {
              "id":"10",
              "titulo":"The Invincible Iron Man 598",
              "imagen":Iron2,
          },
          {
              "id":"11",
              "titulo":"Captain America Living Leyend 1",
              "imagen":Capi1,
          },
          {
              "id":"12",
              "titulo":"Captain America: La busqueda de la gema de sangre",
              "imagen":Capi2,
          }
      ]

      const buscaStock = new Promise ((resuelve, rechaza) => {
        setTimeout(() =>{
          resuelve(comicsCatalogo);
        }, 2000);
      });

      buscaStock.then((resuelve) => {
        setComics(resuelve);
      });

  }, []);


return (
  

    <ItemList comics={comics}/>
    
  

)
}

export default ItemListContainer;
