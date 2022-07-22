import React from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ( {item}) => {
    const onAdd = (param) => {console.log('la cantidad comprada es ${param}' )}
    return( <>
        <div>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.duration}</p>
        </div>


        </>
       
    )
}

export default ItemDetail;