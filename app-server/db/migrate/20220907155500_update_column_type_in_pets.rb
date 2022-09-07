class UpdateColumnTypeInPets < ActiveRecord::Migration[6.1]
  def change
    change_table :pets do |t|
      t.rename :type, :pet_type
    end
  end
end
