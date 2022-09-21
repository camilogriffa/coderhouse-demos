import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../db/asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const getProduct = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(products.find((product) => product.id === (id))),
      2000
    );
  });
  useEffect(() => {
    getProduct()
		.then((response) => setItem(response));
  }, []);
  return <>{item ? <ItemDetail item={item} /> : <h1>Cargando...</h1>}</>;
};
export default ItemDetailContainer;