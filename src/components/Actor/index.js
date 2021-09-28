import React from 'react';
import {  Image, Wrapper } from './Actor.styles';

 //<Image src={imageUrl} alt="actor-thumb"></Image>

const Actor = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt={`actor thumb ${name}`}></Image>
        <h3>{character}</h3>
        <p>{name}</p>
    </Wrapper>

);

export default Actor;