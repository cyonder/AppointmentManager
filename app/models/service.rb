class Service < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :shop, optional: true
end
