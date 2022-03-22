/* eslint-disable */
import React from 'react'

import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const ShowGrid = ({data}) => {
  return (
    <div>
        {
        data.map(({show})=>{
            return <ShowCard key={show.id} id={show.id} name={show.id} image={show.image?show.image.medium:IMAGE_NOT_FOUND} summary={show.summary} />
        })
        }
    </div>
  )
}

export default ShowGrid