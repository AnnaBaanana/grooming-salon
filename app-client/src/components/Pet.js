import React from 'react';

function Pet({pet}) {

    function handleCreateAppointment() {
        

    }

    return (
        <li>
            <strong>{pet.name}</strong>
            <img
            src={pet.image_url}
            alt={pet.breed}
            />
            <button>Create Appointment</button>
        </li>
    )
}

export default Pet;