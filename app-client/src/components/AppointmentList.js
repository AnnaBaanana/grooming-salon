import Appointment from './Appointment'

function AppointmentList({appointments, deleteAppointment}) {

    return(
        <ul>
            {appointments.map(appointment => (
                <Appointment
                    key={appointment.id} appointment={appointment}
                    deleteAppointment={deleteAppointment}
                />
            ))}
        </ul>
    )
}

export default AppointmentList;