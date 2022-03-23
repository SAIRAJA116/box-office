/* eslint-disable  */

import React from 'react'

import IMG_PLACEHOLDER from "../../images/not-found.png"
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.style';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  console.log(name)
  console.log(rating)
  console.log(summary)
  console.log(tags)
  console.log(image)
    return (
      <MainDataWrapper>
        <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
        <div className='text-side'>
          <Headline>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </Headline>
          <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <TagList>
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagList>
          </div>
        </div>
      </MainDataWrapper>
    );
  };

// const ShowMainData = ({}) => {
//   return (
//     <div>
        
//     </div>
//   )
// }

export default ShowMainData