class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  belongs_to :stock
end
