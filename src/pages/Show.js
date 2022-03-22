/* eslint-disable */
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { apiGet } from '../misc/config'


const Show = () => {

    const {id} = useParams()
    const [show,setShow] = useState(null)
    const [isLoading,setIsLoding] = useState(true)
    const [error,setError] = useState("")

    useEffect( ()=> {

        let isMounted = true;


        apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
            
            setTimeout(()=>{
                if(isMounted){
                    setShow(results);
                    setIsLoding(false);
                }
                
            },3000)

            
        }).catch(err => {
            if(isMounted){
                setError(err.message);
                setIsLoding(flase);
            }
            
        })

        return ()=>{
            isMounted = false;
        }

    },[id])
    
    console.log(show)

    if(isLoading){
        return (<div>Data is being loaded</div>);
    }

    if(error){
        return (<div>{error }</div>)
    }

    return (
        <div>ShowPage</div>
    )
}

export default Show