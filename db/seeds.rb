# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Client.destroy_all
Employee.destroy_all


@terra = Employee.create!(
  email: '00001TBC@mail.com',
  employee_id: '00001TBC',
  password: '123456'
)
@riley = Employee.create!(
  email: '00002RCB@mail.com',
  employee_id: '00002RCB',
  password: '123456'
)
@rhys = Employee.create!(
  email: '00003RTH@mail.com',
  employee_id: '00003RTH',
  password: '123456'
)

@bman = Client.create!(
	name: 'Bruce Wayne',
    address:'12345 Place Way, Statesville, DC 67890',
    phone:'301-555-3456',
    img_url:'https://www.lego.com/cdn/cs/catalog/assets/blt28bc9df041194ca5/1/70909_1to1_brucewayne_360_480.png',
    employee_id:'00001TBC'
)

@brdman = Client.create!(
	name: 'Harvey Birdman',
    address:'12345 Place Way, Statesville, DC 67890',
    phone:'301-555-3456',
    img_url:'https://www.lego.com/cdn/cs/catalog/assets/blt28bc9df041194ca5/1/70909_1to1_brucewayne_360_480.png',
    employee_id:'00001TBC'
)