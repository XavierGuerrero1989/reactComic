import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { TituloSeccion } from "../TituloDeSeccion/TituloSeccion";
import { Loading } from "../Loader/Loading";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategoria } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const querydba = getFirestore();
    const queryCollectiona = collection(querydba, "productos");

    if (idCategoria) {
      const queryFilter = query(
        queryCollectiona,
        where("idCategoria", "==", idCategoria)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollectiona).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
      setLoading(false);
    }
  }, [idCategoria]);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <TituloSeccion />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ItemList data={data} />}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
