function Appointment({appointment, deleteAppointment}) {

    function editAppointment() {
        console.log('I was clicked')
    }

    function handleDelete() {
        //console.log("i will be deleted", appointment)
        fetch(`http://localhost:9292/appointments/${appointment.id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(data => deleteAppointment(data))
    }

    return(
        <li>
            <strong>{appointment.on_date} </strong>
            <strong> {appointment.at_time} </strong>
            <strong> {appointment.name} </strong>
            <strong> {appointment.breed} </strong>
            <button onClick={editAppointment} appointment={appointment}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Appointment;