import Appointment from './Appointment'

function AppointmentList({appointments, deleteAppointment, editAppointment}) {

    return(
        <ul>
            {appointments.map(appointment => (
                <Appointment
                    key={appointment.id} appointment={appointment}
                    deleteAppointment={deleteAppointment}
                    editAppointment={editAppointment}
                />
            ))}
        </ul>
    )
}

export default AppointmentList;