class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.date :on_date
      t.integer :at_time
      t.float :price
      t.string :notes
      t.timestamps
      t.belongs_to :owner
      t.belongs_to :pet
    end
  end
end
