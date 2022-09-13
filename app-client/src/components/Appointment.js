function Appointment({appointment, deleteAppointment, editAppointment}) {
    //console.log(appointment)

    function handleEdit() {
        editAppointment(appointment)
    }

    function handleDelete() {
        //console.log("i will be deleted", appointment)
        fetch(`http://localhost:9292/appointments/${appointment.id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(data => deleteAppointment(data))
    }

    return(
        <tr>
            <td>{appointment.on_date} </td>
            <td> {appointment.at_time} </td>
            <td> {appointment.pet.name} </td>
            <td> {appointment.pet.owners[0].first_name} </td>
            <td> {appointment.pet.owners[0].phone} </td>
            <td> <button onClick={handleEdit} appointment={appointment}>Edit</button></td>
            <td> <button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Appointment;