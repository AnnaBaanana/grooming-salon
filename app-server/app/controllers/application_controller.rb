class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/pets" do
    pets = Pet.all.order(:name)
    pets.to_json({include: :owners})
  end

  get "/appointments" do
    appointments = Appointment.all.order(:on_date)
    appointments.to_json(only: [:id, :on_date, :at_time, :price], include: {pet: {include: :owners}} )
  end

  #need to add other data points
  post "/appointments" do
    binding.pry
    owner = Owner.find_or_create_by(phone: params[:owner_phone])
    owner.update(first_name: params[:owner_first_name], last_name: params[:owner_last_name])
    pet = owner.pets.find_or_create_by(name: params[:pet_name])
    pet.update(breed: params[:breed], pet_type: params[:pet_type])
    # if new appt is created that means owner--pet combo did not exist --> update appointment
    #if old appt is found --> need to create new appt
    if (owner.appointments.last==nil)
      puts 'new appointment'
      owner.appointments.last.update(
      on_date: params[:on_date],
      at_time: params[:at_time],
      price: params[:price])
    else
      puts 'old appointment'
      owner.appointments.create(
        on_date: params[:on_date],
        at_time: params[:at_time],
        price: params[:price],
        pet_id: pet.id
      )
    end
    
    appointment = owner.appointments.last
  
    appointment.to_json(only: [:id, :on_date, :at_time, :price], include: {pet: {include: :owners}} )
  end

  #need to add other data points
  patch "/appointments/:id" do
    #binding.pry
    appointment = Appointment.find(params[:id])
    appointment.update(
      on_date: params[:on_date],
      at_time: params[:at_time],
      price: params[:price]
    )
    pet = Pet.find(appointment.pet_id)
    pet.update(name: params[:pet_name], breed: params[:breed], pet_type: params[:pet_type])
    owner = Owner.find(appointment.owner_id)
    owner.update(first_name: params[:owner_first_name], last_name: params[:owner_last_name], phone: params[:owner_phone])
    appointment.to_json(only: [:id, :on_date, :at_time, :price], include: {pet: {include: :owners}} )
  end

  #working well
  delete "/appointments/:id" do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    appointment.to_json
  end



end
