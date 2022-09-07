class Pet < ActiveRecord::Base
    has_many :appointments
    has_many :owners, through: :appointments
end