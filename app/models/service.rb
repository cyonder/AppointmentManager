class Service < ApplicationRecord
    # has_and_belongs_to_many :users
    has_many :barber_services
    belongs_to :shop, optional: true
end
