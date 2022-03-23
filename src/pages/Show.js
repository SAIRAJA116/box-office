/* eslint-disable */
import React from 'react'
import {useParams} from "react-router-dom"
import Cast from '../components/show/Cast'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
import ShowMainData from '../components/show/ShowMainData'
import { apiGet } from '../misc/config'
import { useShow } from '../misc/custom-hooks'
import { InfoBlock, ShowPageWrapper } from './show.style'


 

const reducer = (prevState,action ) => {
    switch(action.type){

        case "FETCH_SUCCESS": {
            return { error : null, isLoading:false, show:action.show  }
        }
        case 'FETCH_FAILED': {
            return {...prevState,isLoading : false,error: action.error}
        }

        default: return prevState
    }
}



const Show = () => {

    const {id} = useParams()

    const {show,isLoading,error} = useShow(id);
    
    console.log(show)

    if(isLoading){
        return (<div>Data is being loaded</div>);
    }

    if(error){
        return (<div>{error}</div>)
    }

    return (
        <ShowPageWrapper>
            <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />
            <InfoBlock>
                <h2>Details</h2>
                <Details status = {show.status} network = {show.network} premiered={show.premiered} />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons = {show._embedded.seasons} />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast = {show._embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show