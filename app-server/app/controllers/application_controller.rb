class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/pets" do
    pets = Pet.all.order(:name)
    pets.to_json
  end

  get "/appointments" do
    appointments = Appointment.all.order(:on_date)
    appointments.to_json(only: [:id, :on_date, :at_time], include: {pet: { only: [:name, :pet_type, :breed] }})
  end

  #need to add other data points
  post "/appointments" do
    binding.pry
    appointment = Appointment.create(
      on_date: params[:on_date],
      at_time: params[:at_time]
    )
    pet = Pet.create(name: params[:pet_name], breed: params[:breed], pet_type: params[:pet_type])
    owner = Owner.create(first_name: params[:owner_first_name], last_name: params[:owner_last_name], phone: params[:owner_phone])
    pet.appointments << appointment
    owner.appointments << appointment
    appointment.to_json
  end

  #need to add other data points
  patch "/appointments/:id" do
    binding.pry
    appointment = Appointment.find(params[:id])
    appointment.update(
      on_date: params[:on_date],
      at_time: params[:at_time]
    )
    pet = Pet.find(appointment.pet_id)
    pet.update(name: params[:pet_name])
    owner = Owner.find(appointment.owner_id)
    owner.update(first_name: params[:owner_name])
    appointment.to_json
  end

  #working well
  delete "/appointments/:id" do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    appointment.to_json
  end



end
