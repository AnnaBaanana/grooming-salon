
function AppointmentDetails({editForm, formData, handleFormDataChange, handleFormSubmit}) {

    function handleSubmit(e) {
        e.preventDefault()
        if (formData.on_date != null && formData.at_time != null ) {
        fetch('http://localhost:9292/appointments', {
        method: "POST",
        headers: {"Content-type": "Application/json"},
        body: JSON.stringify(formData)}).then(res => res.json()).then(data => 
            handleFormSubmit(data))}
        else {
            alert("Appointment Date and Time cannot be blank")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='on_date' 
                id='on_date' 
                value={formData.on_date} 
                placeholder='date'
                onChange={e => handleFormDataChange(e)}
            />
            <input 
                type='text' 
                name='at_time' 
                id='at_time' 
                value={formData.at_time} 
                placeholder='time'
                onChange={e => handleFormDataChange(e)} 
            />
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
                name='owner_name' 
                id='owner_name' 
                value={formData.owner_name} 
                placeholder='owner name'
                onChange={e => handleFormDataChange(e)} 
            />
            <input 
                type='submit' 
                value='Save' 
            />
        </form>
    )
}


export default AppointmentDetails;