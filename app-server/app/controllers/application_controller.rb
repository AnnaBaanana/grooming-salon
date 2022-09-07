class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end

end
