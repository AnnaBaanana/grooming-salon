import Appointment from './Appointment'

function AppointmentList({appointments, deleteAppointment, editAppointment}) {

    return(
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
                {appointments.map(appointment => (
                    <Appointment
                        key={appointment.id} appointment={appointment}
                        deleteAppointment={deleteAppointment}
                        editAppointment={editAppointment}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default AppointmentList;