function Appointment({on_date, at_time}) {
    return(
        <li>
            <strong>{on_date}</strong>
            <strong>{at_time}</strong>
        </li>
    )
}

export default Appointment;