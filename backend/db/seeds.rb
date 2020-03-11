# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "http"
require "json"

Transaction.destroy_all
Stock.destroy_all
User.destroy_all

def search(tickers, type, api_key)
  url = "https://cloud.iexapis.com/stable/stock/market/batch/"
  params = {
    symbols: tickers,
    types: type,
    token: api_key,
  }
  response = HTTP.get(url, params: params)
  # .auth("Bearer #{ENV["API_TOKEN"]}").
  json_response = response.parse
  json_response
end

iex_stock = search("aapl, fb, msft, googl, amzn, snap, uber, tsla", "quote", ENV["API_TOKEN"])

def create_stocks(response)
  response.each do |company, stock_info|
    Stock.create(
      ticker: stock_info["quote"]["symbol"],
      open_price: stock_info["quote"]["open"],
      current_price: stock_info["quote"]["latestPrice"],
    )
  end
end

create_stocks(iex_stock)
