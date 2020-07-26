class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  belongs_to :stock
  belongs_to :user
end
