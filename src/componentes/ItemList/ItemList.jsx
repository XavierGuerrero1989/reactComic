import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ comics }) => {
  return (

    <>

    {comics.map((comic)=>
             <Item key= {comic.id} comic={comic}/>
        )}
    </>  
    )
}

export default ItemList;