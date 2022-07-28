import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { ItemDetailList } from './ItemDetailList';

const ItemDetailContainer = () => {

    const [comicDetail, setComicDetail] = useState([])

  useEffect(()=>{

    let comicsCatalogoDetail = [
          {
              "id":"1",
              "titulo":"Action Comics 1",
              "heroe":"Super Man",
              "descripcion":"Primera aparición de Super Man",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"2",
              "titulo":"Super Man 75: La muerte de Super Man",
              "heroe":"Super Man",
              "descripcion":"Volumen donde se presenta la muerte de Super Man",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"3",
              "titulo":"Flashpoint",
              "heroe":"Flash",
              "descripcion":"Evento integral del DC universe, protagonizado por Flash",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"4",
              "titulo":"Flash 324: La muerte de Reverse Flash",
              "heroe":"Flash",
              "descripcion":"Episodio donde Flash elimina a Reverse Flash accidentalmente",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"5",
              "titulo":"Aquaman de Peter David",
              "heroe":"Aquaman",
              "descripcion":"Volumen recopilatorio del Aquaman de Peter David",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"6",
              "titulo":"Aquaman 29",
              "heroe":"Aquaman",
              "descripcion":"Episodio 29 de la serie original de Aquaman",
              "categoria":"DC",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"7",
              "titulo":"Thor 274",
              "heroe":"Thor",
              "descripcion":"Thor 274",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"8",
              "titulo":"Thor 297",
              "heroe":"Thor",
              "descripcion":"Thor 297",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"9",
              "titulo":"The Invincible Iron Man 126",
              "heroe":"Iron Man",
              "descripcion":"The Invincible Iron Man 126",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"10",
              "titulo":"The Invincible Iron Man 598",
              "heroe":"Iron Man",
              "descripcion":"The Invincible Iron Man 598",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"11",
              "titulo":"Captain America Living Leyend 1",
              "heroe":"Capitan America",
              "descripcion":"Captain America Living Leyend 1",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          },
          {
              "id":"12",
              "titulo":"Captain America: La busqueda de la gema de sangre",
              "heroe":"Capitan America",
              "descripcion":"Captain America: La busqueda de la gema de sangre",
              "categoria":"Marvel",
              "stock":"10",
              "precio":"5000"
          }
      ]

      const searchDetail = new Promise ((resuelve, rechaza) => {
        setTimeout(() =>{
          resuelve(comicsCatalogoDetail);
        }, 2000);
      });

      searchDetail.then((resuelve) => {
        setComicDetail(resuelve);
      });

  }, []);


return (
  

    <ItemDetailList comicDetail={comicDetail} />
    
  

)
}
  
  export default ItemDetailContainer;
