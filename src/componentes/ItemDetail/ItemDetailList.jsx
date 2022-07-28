import React from 'react'
import { ItemDetail } from './ItemDetail'


export const ItemDetailList = ({ comicDetail }) => {

    return (

        <>
        
        {comicDetail.map((comicDetailItem)=>
                 <ItemDetail key= {comicDetailItem.id} comicDetailItem= {comicDetailItem}/>
            )}
        </>  
        )
}
