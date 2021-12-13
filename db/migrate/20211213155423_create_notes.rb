class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :client_id
      t.string :note
      t.string :employee_id

      t.timestamps
    end
  end
end
