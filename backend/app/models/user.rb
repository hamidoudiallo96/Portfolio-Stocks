class User < ApplicationRecord
  has_secure_password
  validates :name, uniqueness: true
  validates :email, uniqueness: true
  has_many :transactions
  has_many :stocks, through: :transactions
end
