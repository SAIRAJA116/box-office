/* eslint-disable */
import React from 'react'
import { CastList } from './Cast.styled';
import IMG_PLACEHOLDER from "../../images/not-found.png"




const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className='pic-wrapper'>
            <img 
              src={person.image ? person.image.medium : IMG_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div className='actor'>
            <span className='bold'>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};


export default Cast