class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :open_price, :current_price, :shares
  # has_many :transactions
end
