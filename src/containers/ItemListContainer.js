import React, { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount'
import products from '../data/products'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router';
import { db } from '../utils/firebaseConfig';
import { productsCollection } from '../utils/firebaseConfig';
import { Toast } from 'bootstrap';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';


const ItemLisContainer = () => {
    const [data, setData] = useState([])
    const onAdd = (param) => { console.log("la cantidad comparada es" + param) }
    const { categoryId } = useParams();
    const [loanding, setLoanding] = useState(true)

    
    useEffect(() => {
        const requestFilter = categoryId ? query(productsCollection, where('category', '==', categoryId)) : productsCollection
        getDocs(requestFilter)
            .then(result => setData(result.docs.map(doc => doc.data())))
            .catch(error => Toast.error("error al cargar producto"))
            .finally(() => {
                setLoanding(false)
                Toast.dismise()
            }
            )
    }, [categoryId])

    return (
        <>
            <ItemList items={data} />
        </>
    );
}
export default ItemLisContainer;