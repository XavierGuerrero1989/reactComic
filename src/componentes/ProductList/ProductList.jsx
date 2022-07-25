import React from 'react'
import Product from '../cardGenerator/CardGenerator'

const ProductList = ({comics}) => {
  return (
    <>
    {
        comics.map((comics)=>
             <Product key= {comics.id} titulo={comics.titulo} heroe={comics.heroe} imagen={comics.imagen} stock={comics.stock} precio={comics.precio} descripcion={comics.descripcion}/>
        )
    }
    </>  
    )
}

export default ProductList