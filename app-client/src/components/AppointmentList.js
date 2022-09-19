import Appointment from './Appointment'

function AppointmentList({pastAppointments, setPastAppointments, appointments, deleteAppointment, editAppointment}) {

    const appts = appointments.filter(appointment => appointment.on_date!==null).filter(appointment => {
        if (pastAppointments) {
        return (
            Date.parse(appointment.on_date)<Date.parse(new Date()))}
        else  {
            return (
                Date.parse(appointment.on_date)>=Date.parse(new Date())
            )}
    })

    return(
        <div>
        <table>
            <thead>
                <th> Date</th>
                <th> Time</th>
                <th> Pet Name</th>
                <th> Owner </th>
                <th> Phone</th>
                <th> Edit </th>
                <th> Delete </th>
            </thead>
            <tbody>
                {appts.map(appointment => (
                    <Appointment
                        key={appointment.id} appointment={appointment}
                        deleteAppointment={deleteAppointment}
                        editAppointment={editAppointment}
                    />
                ))}
            </tbody>
        </table>
        <button onClick={e => setPastAppointments(!pastAppointments)}>{pastAppointments? "Upcoming Appointments" : "Past Appointments"}</button>
        </div>
    )
}

export default AppointmentList;