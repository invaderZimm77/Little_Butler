class Client < ApplicationRecord
  belongs_to :employee
  has_many :notes
end
