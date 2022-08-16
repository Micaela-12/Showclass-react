import React from 'react'
import { useEffect, useState, customfetch } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router'
import { where, getDocs, query } from "firebase/firestore";
import { productsCollection } from '../utils/firebaseConfig';
import { Toast } from 'bootstrap';
import { getFirestore, doc, getDoc} from 'firebase/firestore';


export default function ItemDetailContainer () {
    const [loading, setLoading] = useState(true)
    const [item, setItem ] = useState({})
    const { id } = useParams ()



        useEffect(() => {
            const itemFilter = query(productsCollection, where('id', '==', Number(id)))
            debugger
            getDocs(itemFilter)
                .then(result => setItem(result.docs[0].data()))
                .catch(error => Toast.error("error al cargar producto"))
                .finally(() => 
                    setLoading(false))

    
        }, [id])
return (
    
        <ItemDetail item={item}/>

)
}

