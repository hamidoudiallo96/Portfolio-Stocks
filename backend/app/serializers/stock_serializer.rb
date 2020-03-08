class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :open_price, :current_price, :shares
end
