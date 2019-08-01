# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
  email: 'megumi@gmail.com',
  password: '12345678',
  name: 'megumi',
)

User.create!(
  email: 'minami@gmail.com',
  password: '12345678',
  name: 'minami',
)

User.create!(
  email: 'sae@gmail.com',
  password: '12345678',
  name: 'sae',
)

User.create!(
  email: 'saki@gmail.com',
  password: '12345678',
  name: 'saki',
)

User.create!(
  email: 'shiori@gmail.com',
  password: '12345678',
  name: 'shiori',
)

p "create Users"