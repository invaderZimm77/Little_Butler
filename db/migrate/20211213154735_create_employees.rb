class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :email
      t.string :employee_id
      t.string :password_digest

      t.timestamps
    end
  end
end
