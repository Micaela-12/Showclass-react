import React from 'react'
import { useEffect, useState, customfetch } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router'
import {db} from "../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [Data, setData] = useState({});
    const { id } = useParams();


    useEffect (() =>{
    const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
            
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }))
            
            return dataFromFirestore
            }
    
        if (id === undefined){
            firestoreFetch()
            .then(result=> setData(result))
            .catch (err=> setData(err)) 
        } else {
    
            firestoreFetch()
            .then(result=> setData(result.find(item=> item.id === id)))
            .catch (err=> setData(err))
     }
    }, [id])
        
       /* const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });

    dataPromise. then(
        (respuesta) => {
            setData(respuesta.find(productos=>productos.id === parseInt(id)));
        },

    []);
    }); */
    
    return (
        <>  
        <div>
            <ItemDetail item={Data}/>
            </div>    
        </>

    )
}

export default ItemDetailContainer ;