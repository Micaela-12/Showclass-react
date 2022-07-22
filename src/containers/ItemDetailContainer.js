
import React from 'react'
import { useEffect, useState, customfetch } from 'react'
import productos from '../data/products'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [Data, setData] = useState({});
    const { id } = useParams();


    useEffect (() =>{
    if(id=== undefined) {
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });

    dataPromise. then(
        (respuesta) => {
            setData(respuesta);
        },

    ) 
    }else {
        const dataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos.filter (item => item.id=== parseInt(id)));
            }, 1000);
        });
    
        dataPromise. then(
            (respuesta) => {
                setData(respuesta);
            },
        )
    }
    }, [id]);

    return (
        <>  
        <div>
            <ItemDetail item={Data}/>
            </div>    
        </>

    )
}

export default ItemDetailContainer ;