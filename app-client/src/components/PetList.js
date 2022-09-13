import React from 'react';
import Pet from './Pet';
import PetFinder from './PetFinder';

function PetList({pets, createAppointment}) {
    return (
        <div>
            <PetFinder />
            <div className='list'>
                <ul>
                    {pets.map((pet) => (
                        <Pet
                            key={pet.id}
                            pet={pet}
                            createAppointment={createAppointment}
                        />
                    ))}
                </ul>
            </div>
        </div>)
}

export default PetList;