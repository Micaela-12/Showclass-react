
import React from 'react'
import { useEffect, useState } from 'react'
import productos from '../data/products'
import artículo from '../components/Item'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {
    const [Data, setData] = useState({});

    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[2]);
        }, 1000);
    });

    dataPromise.then(
        (respuesta) => {
            setData(respuesta);
        },

    )
    return (
        <>  
        <div>
            <ItemDetail item={Data}/>
            </div>    
        </>

    )
}

export default ItemDetailContainer;