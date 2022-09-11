import React from 'react';
import Pet from './Pet';

function PetList({pets}) {
    return (
        <div className='list'>
            <ul>
                {pets.map((pet)=> (
                    <Pet 
                    key={pet.id}
                    pet={pet}
                    />
                ))}
            </ul>
        </div>)
}

export default PetList;