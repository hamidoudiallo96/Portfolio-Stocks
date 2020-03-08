class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
end
