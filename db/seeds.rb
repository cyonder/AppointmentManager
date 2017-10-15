User.create!(shop_id: '1',
               role_id: '2',
               first_name: 'Cagdas',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'email@email.com')

User.create!(shop_id: '1',
               role_id: '3',
               first_name: 'Birand',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'email@email.com')

User.create!(shop_id: '2',
               role_id: '3',
               first_name: 'Arda',
               last_name: 'Ersan',
               phone: '6478780090',
               email: 'email@email.com')

User.create!(shop_id: '2',
               role_id: '2',
               first_name: 'Anyss',
               last_name: 'Hamza',
               phone: '6478780090',
               email: 'email@email.com')

User.create!(shop_id: nil,
              role_id: '1',
              first_name: 'Cagim',
              last_name: 'Gunes',
              phone: '6478780090',
              email: 'email@email.com')

Role.create!(role_name: 'user')
Role.create!(role_name: 'owner')
Role.create!(role_name: 'barber')
Role.create!(role_name: 'frozen')

Service.create!(shop_id: '1',
                service_name: 'Hair Trim',
                price: '25',
                time: '20')

Service.create!(shop_id: '2',
                service_name: 'Hair Trim',
                price: '35',
                time: '20')

Service.create!(shop_id: '1',
                service_name: 'Line Up',
                price: '10',
                time: '40')

Service.create!(shop_id: '1',
                service_name: 'Kids Haircut',
                price: '30',
                time: '15')

Service.create!(shop_id: '2',
                service_name: 'Beard Trim',
                price: '25',
                time: '20')

Service.create!(shop_id: '2',
                service_name: 'Haircut',
                price: '30',
                time: '30')

Service.create!(shop_id: '1',
                service_name: 'Haircut',
                price: '20',
                time: '30')

Shop.create!(shop_name: 'Seville',
             owner_user_id: '1')

Shop.create!(shop_name: 'Lahori',
             owner_user_id: '4')

user = User.first
service = Service.first
user.services << service

user = User.first
service = Service.second
user.services << service

user = User.second
service = Service.second
user.services << service

user = User.second
service = Service.third
user.services << service

user = User.third
service = Service.first
user.services << service

user = User.third
service = Service.second
user.services << service

user = User.third
service = Service.third
user.services << service

##########################

# user = User.first
# role = Role.first
# user.roles << role
#
# user = User.first
# role = Role.second
# user.roles << role
#
# user = User.second
# role = Role.first
# user.roles << role
#
# user = User.second
# role = Role.second
# user.roles << role
#
# user = User.third
# role = Role.first
# user.roles << role
#
# user = User.third
# role = Role.second
# user.roles << role
#
# user = User.fourth
# role = Role.first
# user.roles << role
#
# user = User.fourth
# role = Role.second
# user.roles << role
#
# user = User.fifth
# role = Role.first
# user.roles << role
