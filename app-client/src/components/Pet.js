import React from 'react';

function Pet({pet, createAppointment}) {

    const cat_emoji = '🐱'
    const dog_emoji = '🐶'

    function handleCreateAppointment() {
        console.log('appt')
        createAppointment(pet)
    }

    return (
        <li>
            <strong> {pet.pet_type == 'dog'? `${dog_emoji}` : `${cat_emoji}`} {pet.name} </strong>
            <button onClick={handleCreateAppointment}>Create Appointment</button>
        </li>
    )
}

export default Pet;