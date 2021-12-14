class Employee < ApplicationRecord
  has_secure_password
  has_many :clients
  validates :employee_id, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
