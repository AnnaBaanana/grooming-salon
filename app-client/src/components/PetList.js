import React, {useState} from 'react';
import Pet from './Pet';
import PetFinder from './PetFinder';

function PetList({pets, createAppointment}) {

    const [findName, setFindName] = useState('ory');

    function searchByName(name) {
        console.log('searching for', name)
        setFindName(name)
    }

    console.log('from PetList', findName)

    const filteredPets = pets.filter(pet => pet.name!==null).filter(pet => pet.name.toLowerCase().includes(findName.toLowerCase()))
    console.log(filteredPets)


    return (
        <div>
            <PetFinder findName={findName} searchByName={searchByName}/>
            <div className='list'>
                <ul>
                    {filteredPets.map((pet) => (
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