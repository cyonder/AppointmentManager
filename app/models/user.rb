class User < ApplicationRecord
    # has_and_belongs_to_many :services
    # has_many :services_barbers
    # has_many :services, :through => :services_barbers
    has_many :barber_services

    belongs_to :role, optional: true
    belongs_to :shop, optional: true
end
