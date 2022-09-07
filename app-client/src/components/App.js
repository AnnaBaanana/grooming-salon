import React, {useState, useEffect} from 'react';

import NavBar from './NavBar'
import PetList from './PetList'
import AppointmentList from './AppointmentList'

function App() {

  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/pets").then(res => res.json()).
    then(data => setPets(data))
  },[]);

  useEffect(() => {
    fetch("http://localhost:9292/appointments").then(res => res.json()).
    then(data => setAppointments(appointments))
  },[]);

  return (
    <div className="App">
      <NavBar />
      <h1>Pet Mama Grooming Salon</h1>
      <PetList pets={pets}/>
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
