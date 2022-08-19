import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((comic) => (
        <Item key={comic.id} comic={comic} />
      ))}
    </>
  );
};

export default ItemList;
