import React, { useState } from 'react'
import ItemCount from '../components/ItemCount'
import products from '../data/products'
import ItemList from '../components/ItemList'


const ItemLisContainer = ({ greating }) => {

    const [productList, setproductlist] = useState([])

    const onAdd = (param) => { console.log("la cantidad comparada es" + param) }

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products );
        }, 300);

    });
    myPromise.then((res) => {
        setproductlist(res)
    })


    return (
        <>
            <div className='greating'>{greating}</div>
            <ItemList items ={productList} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </>
    )
}
export default ItemLisContainer;

