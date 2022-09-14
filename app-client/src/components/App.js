import React, {useState, useEffect} from 'react';

import NavBar from './NavBar'
import PetList from './PetList'
import AppointmentList from './AppointmentList'
import AppointmentDetails from './AppointmentDetails'

function App() {

  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])
  const defaultForm = {
    on_date: '',
    at_time: '',
    pet_name: '',
    pet_type: '',
    breed: '',
    price: '',
    owner_first_name: '',
    owner_last_name: '',
    owner_phone: ''
}
  const [formData, setFormData] = useState(defaultForm);
  const [editForm, setEditForm] = useState(null);

  function handleFormDataChange(e) {
    const newFormData = {...formData, [e.target.name]: e.target.value}
    //console.log(newFormData)
    setFormData(newFormData)
  }

  useEffect(() => {
    fetch("http://localhost:9292/pets").then(res => res.json()).
    then(data => setPets(data))
  },[appointments]);

  useEffect(() => {
    fetch("http://localhost:9292/appointments").then(res => res.json()).
    then(data => {
      //console.log(data)
      setAppointments(data)})
  },[formData]);

  function handleFormSubmit(formData) {
    //need to refresh when appointment is edited 
    //console.log('this is json after patch' , formData)
    const newAppointments = [...appointments, formData]
    setAppointments(newAppointments)
    setFormData(defaultForm)
  }

  function deleteAppointment(data) {
    const afterDeleteAppointments = appointments.filter( appointment => appointment.id != data.id)
    setAppointments(afterDeleteAppointments)
  }

  function editAppointment(data) { 
    console.log(data)  
    setEditForm(data.id)
    setFormData({
      on_date: data.on_date,
      at_time: data.at_time,
      pet_name: data.pet.name,
      pet_type: data.pet.pet_type,
      breed: data.pet.breed,
      price: data.price,
      owner_first_name: data.pet.owners[0].first_name,
      owner_last_name: data.pet.owners[0].last_name,
      owner_phone: data.pet.owners[0].phone
  })
  }

  function createAppointment(pet) {
    console.log("need appointment for this pet", pet)
    setFormData({
      pet_name: pet.name,
      pet_type: pet.pet_type,
      breed: pet.breed,
      owner_first_name: pet.owners[0].first_name,
      owner_last_name: pet.owners[0].last_name,
      owner_phone: pet.owners[0].phone
  })
  }

  return (
    <div className="App">
      <h1>Pet Mama Grooming Salon</h1>
      <br></br>
      <section>
      <h3>New Appointment</h3>
      <AppointmentDetails editForm={editForm} formData={formData} handleFormDataChange={handleFormDataChange} handleFormSubmit={handleFormSubmit} />
      </section>
      <br></br>
      <section>
      <h3>Upcoming Appointments</h3>
      <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} editAppointment={editAppointment}/>
      </section>
      <br></br>
      <section>
      <h3>Pets</h3>
      <PetList pets={pets} createAppointment={createAppointment} />
      </section>
    </div>
  );
}

export default App;
