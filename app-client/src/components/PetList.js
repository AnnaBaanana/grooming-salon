import React from 'react';
import Pet from './Pet';

function PetList({pets, createAppointment}) {
    return (
        <div className='list'>
            <ul>
                {pets.map((pet)=> (
                    <Pet 
                    key={pet.id}
                    pet={pet}
                    createAppointment={createAppointment}
                    />
                ))}
            </ul>
        </div>)
}

export default PetList;