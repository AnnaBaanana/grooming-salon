import Appointment from './Appointment'

function AppointmentList({appointments}) {
    return(
        <ul>
            {appointments.map(appointment => (
                <Appointment
                    key={appointment.id}
                    on_date={appointment.on_date}
                    at_time={appointment.at_date}
                />
            ))}
        </ul>
    )
}

export default AppointmentList;