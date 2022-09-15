
function AppointmentDetails({editForm, formData, handleFormDataChange, handleFormSubmit}) {

    const todaysDate = new Date()
    
    console.log(Date.parse(todaysDate)<Date.parse(formData.on_date))



    function handleSubmit(e) {
        e.preventDefault()
        if (formData.on_date.length!==0 && formData.at_time.length!==0 && 
            formData.pet_name.length!==0 && formData.owner_phone.length!==0) {
            if (editForm>0) {
                //if editForm is not NULL -- form is being edited -- do patch
                fetch(`http://localhost:9292/appointments/${editForm}`, {
                    method: "PATCH",
                    headers: {"Content-type": "Application/json"},
                    body: JSON.stringify(formData)}).then(res => res.json()).then(data => 
                        handleFormSubmit(data))
                    } else {
                //else form is new -- do post
                fetch('http://localhost:9292/appointments', {
                    method: "POST",
                    headers: {"Content-type": "Application/json"},
                    body: JSON.stringify(formData)}).then(res => res.json()).then(data => 
                        handleFormSubmit(data))
            }
            }
        else {
            alert("Appointment Date, Time, Pet Name or Phone cannot be blank")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <strong>Appointment Date and Time</strong>
            <br></br>
            <input 
                type='date' 
                name='on_date' 
                id='on_date' 
                value={formData.on_date} 
                placeholder='date'
                onChange={e => handleFormDataChange(e)}
            />
            <select
                name='at_time' 
                id='at_time' 
                value={formData.at_time} 
                placeholder='time'
                onChange={e => handleFormDataChange(e)}>
                    <option value='000'>select time</option>
                    <option value='900'>9:00 AM</option>
                    <option value='930'>9:30 AM</option>
                    <option value='1000'>10:00 AM</option>
                    <option value='1030'>10:30 AM</option>
                    <option value='1100'>11:00 AM</option>
                    <option value='1130'>11:30 AM</option>
                    <option value='1200'>12:00 PM</option>
                    <option value='12300'>12:30 PM</option>
            </select> 
            <br></br>
            <strong>Pet Information</strong>
            <br></br>
            <input 
                type='text' 
                name='pet_name' 
                id='pet_name' 
                value={formData.pet_name} 
                placeholder='pet name'
                onChange={e => handleFormDataChange(e)}  
            />
            <input
                type='text' 
                name='breed' 
                id='breed' 
                value={formData.breed} 
                placeholder='pet breed'
                onChange={e => handleFormDataChange(e)}
            /> 
             <select
                name='pet_type' 
                id='pet_type' 
                value={formData.pet_type} 
                placeholder='cat or dog'
                onChange={e => handleFormDataChange(e)}>
                    <option value='select'>select pet type</option>
                    <option value='cat'>cat</option>
                    <option value='dog'>dog</option>
            </select>
            <input
                type='text' 
                name='price' 
                id='price' 
                value={formData.price} 
                placeholder='price, $'
                onChange={e => handleFormDataChange(e)}
            /> 
            <br></br>
            <strong>Owner Information</strong>
            <br></br>
            <input 
                type='text' 
                name='owner_first_name' 
                id='owner_first_name' 
                value={formData.owner_first_name} 
                placeholder='owner first name'
                onChange={e => handleFormDataChange(e)} 
            />
            <input 
                type='text' 
                name='owner_last_name' 
                id='owner_last_name' 
                value={formData.owner_last_name} 
                placeholder='owner last name'
                onChange={e => handleFormDataChange(e)} 
            />
            <input 
                type='text' 
                name='owner_phone' 
                id='owner_phone' 
                value={formData.owner_phone} 
                placeholder='owner phone'
                onChange={e => handleFormDataChange(e)} 
            />
            <br></br>
            <input 
                type='submit' 
                value='Save' 
            />
        </form>
    )
}


export default AppointmentDetails;