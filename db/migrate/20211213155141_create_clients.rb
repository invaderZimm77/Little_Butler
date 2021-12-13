class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :img_url
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
