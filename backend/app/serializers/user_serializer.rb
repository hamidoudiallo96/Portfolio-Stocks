class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :balance
end
