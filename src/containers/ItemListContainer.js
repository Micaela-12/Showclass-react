import React, { useEffect, useState  } from 'react'
import ItemCount from '../components/ItemCount'
import products from '../data/products'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router';


const ItemLisContainer = ({props}) => {
    const onAdd = (param) => { console.log("la cantidad comparada es" + param) }
 
    const [productList, setproductlist] = useState([])
    const { id } = useParams();

useEffect (() =>{

    if(id=== undefined) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 300);

    });
    myPromise.then((res) => {
        setproductlist(res)
    },
    )
}else {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter (item => item.categoryId === parseInt(id)));
        }, 300);

    });
    myPromise.then((res) => {
        setproductlist(res)
    },
    
    )
}
},[id]);

return (
    <>
    
        <ItemList items={productList} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />

    </>
);
}

export default ItemLisContainer;

