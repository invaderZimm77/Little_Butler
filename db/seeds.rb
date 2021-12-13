# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Employee.destroy_all
# Client.destroy_all

@TBC = Employee.create!(
  email: '00001TBC@mail.com',
  employee_id: '00001TBC',
  password: '123456'
)
