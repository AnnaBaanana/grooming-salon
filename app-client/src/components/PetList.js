import React from 'react';
import Pet from './Pet';

function PetList({pets}) {
    return (
        <div className='list'>
            <ul>
                {pets.map((pet)=> (
                    <Pet 
                    key={pet.id}
                    name={pet.name}
                    image_url={pet.image_url}
                    />
                ))}
            </ul>
        </div>)
}

export default PetList;