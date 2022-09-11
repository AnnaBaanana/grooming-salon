import React from 'react';

function Pet({pet}) {
    return (
        <li>
            <strong>{pet.name}</strong>
            <img
            src={pet.image_url}
            alt={pet.name}
            />
            <button>Create Appointment</button>
        </li>
    )
}

export default Pet;