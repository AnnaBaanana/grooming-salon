import React from 'react';

function Pet({name, image_url}) {
    return (
        <li>
            <strong>{name}</strong>
            <img
            src={image_url}
            alt={name}
            />
            <button>Create Appointment</button>
        </li>
    )
}

export default Pet;