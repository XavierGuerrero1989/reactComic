import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loader/Loading';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// comicsDetailCatalogo 

const ItemDetailContainer = () => {

  
  const [data, setData] = useState({})
  const {idItem} = useParams()

  // const [loadingDetail, setLoadingDetail] = useState(true)
  

  useEffect(()=>{
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', idItem);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()})) 
 

  }, [idItem]);
  
return (

  
  <ItemDetail data={data} />
 
//  <>
//   {
//     loadingDetail
//     ? <div className='text-center' style={{margin: 20}}><Loading/></div>
//     :  <ItemDetail data={data} />
//   }
//  </>   


)
}
  
  export default ItemDetailContainer;
 