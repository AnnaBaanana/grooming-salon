import React, {useState, useEffect} from 'react';

import NavBar from './NavBar'
import PetList from './PetList'
import AppointmentList from './AppointmentList'
import AppointmentDetails from './AppointmentDetails'

function App() {

  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])
  const [formData, setFormData] = useState({
    on_date: '',
    at_time: '',
    pet_name: '',
    owner_name: ''
});
  const [editForm, setEditForm] = useState(null);

  function handleFormDataChange(e) {
    const newFormData = {...formData, [e.target.name]: e.target.value}
    console.log(newFormData)
    setFormData(newFormData)
  }

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

  function editAppointment(data) {
    console.log('I am being edited', data)
    setEditForm(data.id)
    setFormData({
      on_date: data.on_date,
      at_time: data.at_time,
      pet_name: data.pet_name,
      owner_name: data.owner_name
  })
  }

  return (
    <div className="App">
      <NavBar />
      <h1>Pet Mama Grooming Salon</h1>
      <br></br>
      <button>New Appointment</button>
      <AppointmentDetails editForm={editForm} formData={formData} handleFormDataChange={handleFormDataChange} handleFormSubmit={handleFormSubmit} />
      <h3>Upcoming Appointments</h3>
      <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} editAppointment={editAppointment}/>
      <br></br>
      <h3>Pets</h3>
      <PetList pets={pets}/>
    </div>
  );
}

export default App;
