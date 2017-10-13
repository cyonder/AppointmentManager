# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Barber.create!(first_name: 'Cagdas',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'email@email.com')
Barber.create!(first_name: 'Birand',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'email@email.com')
Barber.create!(first_name: 'Arda',
               last_name: 'Ersan',
               phone: '6478780090',
               email: 'email@email.com')
Barber.create!(first_name: 'Cagim',
               last_name: 'Gunes',
               phone: '6478780090',
               email: 'email@email.com')


Service.create!(service_name: 'Beard Trim',
               price: '25',
               time: '20')

Service.create!(service_name: 'Haircut',
                price: '30',
                time: '30')

Service.create!(service_name: 'Line Up',
                price: '10',
                time: '40')

Service.create!(service_name: 'Kids Haircut',
                price: '30',
                time: '15')
