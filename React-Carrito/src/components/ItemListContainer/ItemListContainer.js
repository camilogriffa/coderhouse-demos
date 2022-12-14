import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../db/asyncmock';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const { categoria } = useParams()
    const getProducts = () => new Promise((resolve, reject) => {
        if (categoria) {
            setTimeout(() => resolve(products.filter(item => item.category === categoria)), 2000)
        } else {
            setTimeout(() => resolve(products), 2000)
        }
    })
    useEffect(() => {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))
        return () => {
            setProductList([])
        }
    }, [categoria])

    return (
        <>
            {
                productList.length ? <ItemList productList={productList} /> : <h1>Cargando...</h1>
            }
        </>
    )
}
export default ItemListContainer;