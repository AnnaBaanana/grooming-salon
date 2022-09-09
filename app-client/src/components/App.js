import React, {useState, useEffect} from 'react';

import NavBar from './NavBar'
import PetList from './PetList'
import AppointmentList from './AppointmentList'
import AppointmentDetails from './AppointmentDetails'

function App() {

  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/pets").then(res => res.json()).
    then(data => setPets(data))
  },[]);

  useEffect(() => {
    fetch("http://localhost:9292/appointments").then(res => res.json()).
    then(data => setAppointments(data))
  },[]);

  function handleFormSubmit(formData) {
    const newAppointments = [...appointments, formData]
    setAppointments(newAppointments)
  }

  function deleteAppointment(data) {
    const afterDeleteAppointments = appointments.filter( appointment => appointment.id != data.id)
    setAppointments(afterDeleteAppointments)
  }

  return (
    <div className="App">
      <NavBar />
      <h1>Pet Mama Grooming Salon</h1>
      <br></br>
      <button>New Appointment</button>
      <AppointmentDetails handleFormSubmit={handleFormSubmit}/>
      <h3>Upcoming Appointments</h3>
      <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment}/>
      <br></br>
      <h3>Pets</h3>
      <PetList pets={pets}/>
    </div>
  );
}

export default App;
