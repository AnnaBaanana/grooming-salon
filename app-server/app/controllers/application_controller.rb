class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/pets" do
    pets = Pet.all.order(:name)
    pets.to_json
  end

  get "/appointments" do
    appointments = Appointment.all.order(:on_date)
    appointments.to_json(include: {pet: { only: [:name, :pet_type, :breed] }})
  end


  #need to add other data points
  post "/appointments" do
    #binding.pry
    appointment = Appointment.create(
      on_date: params[:on_date],
      at_time: params[:at_time]
    )
    pet = Pet.create(name: params[:pet_name])
    owner = Owner.create(first_name: params[:owner_name])
    pet.appointments << appointment
    owner.appointments << appointment
    appointment.to_json
  end

  #working well
  delete "/appointments/:id" do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    appointment.to_json
  end



end
