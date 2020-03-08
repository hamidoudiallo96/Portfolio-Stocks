class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  has_one :user
  has_one :stock
end
