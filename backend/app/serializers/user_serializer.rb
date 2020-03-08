class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :balance
  has_many :transactions
end
