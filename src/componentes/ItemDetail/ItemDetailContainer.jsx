import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
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


const comicsDetailCatalogo = [
  {
    id: 1,
    titulo:"Action Comics 1",
    heroe:"Super Man",
    descripcion:"Primera aparición de Super Man",
    idCategoria:'dc',
    stock:10,
    precio:5000,
    imagen: Super1 
  },
  {
    id:2,
    titulo:"Super Man 75: La muerte de Super Man",
    heroe:"Super Man",
    descripcion:"Volumen donde se presenta la muerte de Super Man",
    idCategoria:"dc",
    stock: 10,
    precio: 5000,
    imagen:Super2,
  },
  {
    id: 3,
    titulo:"Flashpoint",
    heroe:"Flash",
    descripcion:"Evento integral del DC universe, protagonizado por Flash",
    idCategoria:"dc",
    stock: 10,
    precio: 5000,
    imagen:Flash1,
  },
  {
    id:4,
    titulo:"Flash 324: La muerte de Reverse Flash",
    heroe:"Flash",
    descripcion:"Episodio donde Flash elimina a Reverse Flash accidentalmente",
    idCategoria:"dc",
    stock:10,
    precio:5000,
    imagen:Flash2,
  },
  {
    id: 5,
    titulo:"Aquaman de Peter David",
    heroe:"Aquaman",
    descripcion:"Volumen recopilatorio del Aquaman de Peter David",
    idCategoria:"dc",
    stock: 10,
    precio: 5000,
    imagen:Aquaman1,
  },
  {
    id: 6,
    titulo:"Aquaman 29",
    heroe:"Aquaman",
    descripcion:"Episodio 29 de la serie original de Aquaman",
    idCategoria:"dc",
    stock: 10,
    precio: 5000,
    imagen: Aquaman2,
  },
  {
    id: 7,
    titulo:"Thor 274",
    heroe:"Thor",
    descripcion:"Thor 274",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Thor1,
  },
  {
    id: 8,
    titulo:"Thor 297",
    heroe:"Thor",
    descripcion:"Thor 297",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Thor2,
  },
  {
    id: 9,
    titulo:"The Invincible Iron Man 126",
    heroe:"Iron Man",
    descripcion:"The Invincible Iron Man 126",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Iron1,
  },
  {
    id: 10,
    titulo:"The Invincible Iron Man 598",
    heroe:"Iron Man",
    descripcion:"The Invincible Iron Man 598",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Iron2,
  },
  {
    id: 11,
    titulo:"Captain America Living Leyend 1",
    heroe:"Capitan America",
    descripcion:"Captain America Living Leyend 1",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Capi1,
  },
  {
    id: 12,
    titulo:"Captain America: La busqueda de la gema de sangre",
    heroe:"Capitan America",
    descripcion:"Captain America: La busqueda de la gema de sangre",
    idCategoria:"marvel",
    stock: 10,
    precio: 5000,
    imagen:Capi2,
  }
]

const ItemDetailContainer = () => {

  
  const [data, setData] = useState({})
  const {idItem} = useParams()

  

  useEffect(()=>{

    const getData = new Promise(resolve =>{
      setTimeout(() => {
        resolve(comicsDetailCatalogo);
      }, 3000);
    }); 

    getData.then(res => setData(res.find(comic => comic.id === parseInt(idItem))));
 

  }, []);
  
return (
  

    <ItemDetail data={data} />
    
  

)
}
  
  export default ItemDetailContainer;
