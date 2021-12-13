class ClientNote < ActiveRecord::Migration[6.1]
  def change
    create_join_table :client, :note
  end
end
