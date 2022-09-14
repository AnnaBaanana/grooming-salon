import React, {useState} from 'react';
import Pet from './Pet';
import PetFinder from './PetFinder';

function PetList({pets, createAppointment}) {

    const [findName, setFindName] = useState('');
    const [findPhone, setFindPhone] = useState('2112')

    function searchByName(name) {
        setFindName(name)
    }

    function searchByPhone(phone) {
        setFindPhone(phone)
    }


    const filteredPets = pets.filter(pet => pet.name!==null).filter(pet => pet.name.toLowerCase().includes(findName.toLowerCase()))


    return (
        <div>
            <PetFinder findName={findName} searchByName={searchByName} findPhone={findPhone} searchByPhone={searchByPhone} />
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