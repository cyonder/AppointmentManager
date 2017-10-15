class User < ApplicationRecord
    has_and_belongs_to_many :services
    belongs_to :role, optional: true
    belongs_to :shop, optional: true
end
